"use server";

import db from "@/lib/db";

interface ProductProp {
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
