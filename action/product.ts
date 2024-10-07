"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Product, Question } from "@prisma/client";

export type ProductWithQuestions = Product & { questions: Question[] };

export interface ProductProp {
  id: string;
  title: string;
  description: string;
  showLogo: boolean;
  logoUrl: string;
  questions: { text: string; type: "rating" | "text" }[];
  userId: string;
}

interface GetProductProps {
  userId: string;
  page?: number;
  pageSize?: number;
}

interface PaginatedProductResult {
  products: ProductProp[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

export const createProduct = async ({ data }: { data: ProductProp }) => {
  try {
    const { title, description, showLogo, logoUrl, questions, userId } = data;

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
            type: question.type,
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

export const getProduct = async ({
  userId,
  page = 1,
  pageSize = 5,
}: GetProductProps): Promise<PaginatedProductResult> => {
  try {
    const skip = (page - 1) * pageSize;

    const [products, totalCount] = await Promise.all([
      db.product.findMany({
        where: {
          userId: userId,
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
        skip: skip,
        take: pageSize,
      }),
      db.product.count({
        where: {
          userId: userId,
        },
      }),
    ]);

    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      products,
      totalCount,
      totalPages,
      currentPage: page,
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
  try {
    const product = await db.product.findFirst({
      where: {
        id: productId,
      },
    });
    if (!product) {
      return {
        success: false,
        message: `No product with id ${productId} exists.`,
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
