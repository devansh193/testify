"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Product, Question } from "@prisma/client";
import { z } from "zod";
import { CreateProductSchema } from "@/schema/schema";
import { ErrorHandler } from "@/lib/error";
import { SuccessResponse } from "@/lib/success";

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
      throw new ErrorHandler("Validation failed", "VALIDATION_ERROR");
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
      throw new ErrorHandler("Product already exists", "CONFLICT");
    }

    await db.product.create({
      data: {
        title: validatedData.title,
        description: validatedData.description,
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
    const message = "Product created successfully.";
    return new SuccessResponse(message, 201).serialize();
  } catch (_error) {
    if (_error instanceof z.ZodError) {
      throw new ErrorHandler("Input validation failed", "VALIDATION_ERROR");
    }
    if (_error instanceof ErrorHandler) {
      throw _error;
    }
    throw new ErrorHandler(
      "Failed to create product.",
      "INTERNAL_SERVER_ERROR"
    );
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
        logoUrl: true,
        userId: true,
        questions: true,
      },
    });
    if (!products) {
      throw new ErrorHandler("Products does not exist.", "CONFLICT");
    }
    const totalProducts = products.length;
    throw new SuccessResponse("Products fetched successfully", 201, {
      products,
      totalProducts,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    if (_error instanceof ErrorHandler) {
      throw _error;
    }
    throw new ErrorHandler("Internal server error.", "INTERNAL_SERVER_ERROR");
  }
};

export const getTestimonials = async ({ productId }: { productId: string }) => {
  try {
    const testimonials = db.testimonial.findMany({
      where: {
        productId: productId,
      },
      select: {
        id: true,
        answers: true,
      },
    });
    if (!testimonials) {
      throw new ErrorHandler("Testimonials does not exist.", "CONFLICT");
    }
    const totalTestimonials = (await testimonials).length;
    throw new SuccessResponse("Testimonials fetched successfully.", 201, {
      testimonials,
      totalTestimonials,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    if (_error instanceof ErrorHandler) {
      throw _error;
    }
    throw new ErrorHandler(
      "Failed to fetch testimonials",
      "INTERNAL_SERVER_ERROR"
    );
  }
};

export const getProductByTitle = async (title: string) => {
  try {
    const validatedTitle = TitleSchema.parse(title);
    const product = db.product.findUnique({
      where: {
        title: validatedTitle,
      },
    });
    if (!product) {
      throw new ErrorHandler(
        `Product with title ${validatedTitle} does not exist.`,
        "CONFLICT"
      );
    }
    throw new SuccessResponse(
      `Product with title ${validatedTitle} successfully.`,
      201,
      {
        product,
      }
    );
  } catch (_error) {
    if (_error instanceof ErrorHandler) {
      throw _error;
    }
    throw new ErrorHandler("Internal server error", "INTERNAL_SERVER_ERROR");
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
      throw new ErrorHandler("Product with id does not exist.", "CONFLICT");
    }
    throw new SuccessResponse("Product with id fetched successfully", 201, {
      product,
    });
  } catch (_error) {
    if (_error instanceof ErrorHandler) {
      throw _error;
    }
    throw new ErrorHandler("Internal server error", "INTERNAL_SERVER_ERROR");
  }
};
