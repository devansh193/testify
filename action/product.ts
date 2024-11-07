"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Product } from "@prisma/client";
import { z } from "zod";
import { CreateProductSchema } from "@/schema/schema";
import { ErrorHandler } from "@/lib/error";

export type ProductWithQuestions = Product & { questions: Question[] };

const UserIdSchema = z.string().uuid();
const ProductIdSchema = z.string().uuid();
const TitleSchema = z.string().min(1);

export const createProduct = async (
  data: z.infer<typeof CreateProductSchema>
) => {
  try {
    const validatedData = CreateProductSchema.parse(data);
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
        message: "Product already exists.",
      };
    }
    await db.product.create({
      data: {
        title: validatedData.title,
        description: validatedData.description,
        user: {
          connect: {
            id: validatedData.userId,
          },
        },
      },
    });
    revalidatePath("/dashboard");
    return {
      success: true,
      message: "Product created successfully.",
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    return {
      success: false,
      message: "Internal server error.",
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
        userId: true,
        questions: true,
      },
    });
    if (!products.length) {
      throw new ErrorHandler("Products do not exist.", "CONFLICT");
    }
    return {
      success: true,
      products,
      totalProducts: products.length,
    };
  } catch (_error) {
    if (_error instanceof ErrorHandler) {
      throw _error;
    }
    throw new ErrorHandler("Internal server error.", "INTERNAL_SERVER_ERROR");
  }
};

export const getTestimonials = async ({ productId }: { productId: string }) => {
  try {
    const testimonials = await db.testimonial.findMany({
      where: {
        productId: productId,
      },
      select: {
        id: true,
      },
    });

    if (!testimonials.length) {
      return {
        success: false,
        message: "No testimonials found.",
      };
    }

    return {
      success: true,
      message: "Testimonials fetched successfully.",
      testimonials,
      totalTestimonials: testimonials.length,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    return {
      success: false,
      message: "Internal server error.",
    };
  }
};

export const getProductByTitle = async (title: string) => {
  try {
    const validatedTitle = TitleSchema.parse(title);

    const product = await db.product.findFirst({
      where: {
        title: {
          equals: validatedTitle,
          mode: "insensitive",
        },
      },
      include: {
        questions: true,
      },
    });

    if (!product) {
      return {
        success: false,
        message: "Product does not exist.",
      };
    }
    return {
      success: true,
      message: "Product fetched successfully.",
      product,
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      success: false,
      message: "An error occurred while fetching the product.",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

export const getProductById = async (productId: string) => {
  try {
    const validatedId = ProductIdSchema.parse(productId);
    const product = await db.product.findUnique({
      where: {
        id: validatedId,
      },
    });

    if (!product) {
      throw new ErrorHandler(
        "Product with this ID does not exist.",
        "CONFLICT"
      );
    }

    return {
      success: true,
      message: "Product fetched successfully.",
      product,
    };
  } catch (_error) {
    if (_error instanceof ErrorHandler) {
      throw _error;
    }
    throw new ErrorHandler("Internal server error.", "INTERNAL_SERVER_ERROR");
  }
};
