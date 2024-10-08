"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Product, Question } from "@prisma/client";
import {
  ProductDetails,
  productIdSchema,
  productSchema,
  userIdSchema,
} from "@/schema/schema";
import { QuestionType } from "@prisma/client";

export type ProductWithQuestions = Product & { questions: Question[] };

export const createProduct = async ({ data }: { data: ProductDetails }) => {
  try {
    const validatedData = productSchema.safeParse(data);
    if (!validatedData.success) {
      return {
        success: false,
        //fix error type.
        message: `${validatedData.error}`,
        error: validatedData.error.errors,
      };
    }

    const { title, description, showLogo, logoUrl, questions, userId } =
      validatedData.data;

    const existingProduct = await db.product.findFirst({
      where: {
        title: {
          equals: title,
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
        title,
        description,
        showLogo,
        logoUrl,
        user: {
          connect: {
            id: userId,
          },
        },
        questions: {
          create: questions.map((question) => ({
            text: question.text,
            type: question.type as QuestionType,
          })),
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
    return {
      success: false,
      message: "Failed to create product.",
      error,
    };
  }
};

export const getProduct = async ({ userId }: { userId: string }) => {
  const validatedId = userIdSchema.safeParse(userId);

  try {
    if (!validatedId) {
      return {
        success: false,
        message: "User id validation error.",
      };
    }
    const products = await db.product.findMany({
      where: {
        userId: validatedId.data,
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
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductByTitle = async (title: string) => {
  if (!title.trim()) {
    console.error("Product title cannot be empty");
  }

  try {
    const products = await db.product.findMany({
      where: { title: { equals: title, mode: "insensitive" } },
      include: { questions: true },
    });

    if (products.length === 0) {
      console.log(`No product found with title: "${title}"`);
    }

    if (products.length > 1) {
      console.warn(
        `Multiple products found with title: "${title}". Returning the first one.`
      );
    }

    return products[0];
  } catch (error) {
    console.error(`Error fetching product with title "${title}":`, error);
  }
};

export const getProductById = async (productId: string) => {
  const validatedId = productIdSchema.safeParse(productId);

  try {
    if (!validatedId) {
      return {
        success: false,
        message: "Slug error",
      };
    }
    const validatedProductId = validatedId.data;
    const product = await db.product.findFirst({
      where: {
        id: validatedProductId,
      },
    });
    if (!product) {
      return {
        success: false,
        message: `No product with id ${validatedProductId} exists.`,
      };
    } else {
      return {
        success: true,
        product,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while fetching the product.",
    };
  }
};
