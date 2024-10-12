"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Product, Question } from "@prisma/client";
import { z } from "zod";
import { CreateProductSchema } from "@/schema/schema";

export type ProductWithQuestions = Product & { questions: Question[] };

const UserIdSchema = z.string().uuid();
const ProductIdSchema = z.string().uuid();
const TitleSchema = z.string().min(1);

export const createProduct = async (
  data: z.infer<typeof CreateProductSchema>
) => {
  try {
    const validatedData = CreateProductSchema.parse(data);
    if (!validatedData) {
      return {
        success: false,
        message: "Schema validation failed",
      };
    }
    const existingProduct = await db.product.findFirst({
      where: {
        title: {
          equals: validatedData.title,
          mode: "insensitive",
        },
      },
    });

    if (existingProduct) {
      return {
        success: false,
        message: "🤨 susss!, Product already exists.",
      };
    }

    const newProduct = await db.product.create({
      data: {
        title: validatedData.title,
        description: validatedData.description,
        showLogo: validatedData.showLogo,
        logoUrl: validatedData.logoUrl,
        user: {
          connect: {
            id: validatedData.userId,
          },
        },
        questions: {
          create: validatedData.questions,
        },
      },
    });

    revalidatePath("/dashboard");

    return {
      success: true,
      data: newProduct,
      message: "Product created successfully!",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Invalid input data.",
        error: error.errors,
      };
    }
    return {
      success: false,
      message: "Failed to create product.",
      error,
    };
  }
};

export const getProduct = async ({ userId }: { userId: string }) => {
  try {
    const validatedId = UserIdSchema.parse(userId);

    const products = await db.product.findMany({
      where: {
        userId: validatedId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        showLogo: true,
        logoUrl: true,
        userId: true,
        questions: {
          select: {
            text: true,
            type: true,
          },
        },
      },
    });

    return {
      products,
      totalCount: products.length,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("User id validation error:", error.errors);
      return {
        success: false,
        message: "Invalid user ID.",
        error: error.errors,
      };
    }
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductByTitle = async (title: string) => {
  try {
    const validatedTitle = TitleSchema.parse(title);

    const products = await db.product.findMany({
      where: { title: { equals: validatedTitle, mode: "insensitive" } },
      include: { questions: true },
    });

    if (products.length === 0) {
      console.log(`No product found with title: "${validatedTitle}"`);
      return null;
    }

    if (products.length > 1) {
      console.warn(
        `Multiple products found with title: "${validatedTitle}". Returning the first one.`
      );
    }

    return products[0];
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Title validation error:", error.errors);
      return null;
    }
    console.error(`Error fetching product with title "${title}":`, error);
    throw error;
  }
};

export const getProductById = async (productId: string) => {
  try {
    const validatedId = ProductIdSchema.parse(productId);

    const product = await db.product.findFirst({
      where: {
        id: validatedId,
      },
    });

    if (!product) {
      return {
        success: false,
        message: `No product with id ${validatedId} exists.`,
      };
    } else {
      return {
        success: true,
        product,
      };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Product ID validation error:", error.errors);
      return {
        success: false,
        message: "Invalid product ID.",
        error: error.errors,
      };
    }
    console.error(error);
    return {
      success: false,
      message: "An error occurred while fetching the product.",
    };
  }
};
