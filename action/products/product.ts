"use server";

import db from "@/lib/db";

interface createProductProps {
  title: string;
  description: string;
  questions: string[];
  rating: boolean;
  userId: string;
}

export const createProduct = async ({
  title,
  description,
  questions,
  rating,
  userId,
}: createProductProps) => {
  if (userId === "") {
    return { success: false, message: "UserId is missing." };
  }

  try {
    const product = await db.product.create({
      data: {
        title,
        description,
        questions,
        rating,
        user: {
          connect: { id: userId },
        },
      },
    });

    return { product, success: true, message: "Product created successfully" };
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, message: "Failed to create product", error };
  }
};

export const getProduct = async ({ userId }: { userId: string }) => {
  if (userId === "") {
    return { success: false, message: "UserId is missing." };
  }
  try {
    const products = await db.product.findMany({
      where: {
        userId: userId,
      },
      include: {
        testimonials: true,
      },
    });
    return {
      products,
      success: true,
      message: "Products fetched successfully.",
    };
  } catch (_error) {
    return { success: false, message: `${_error}` };
  }
};

export const getProductById = async (productId: string) => {
  if (productId === "") {
    return { success: false, message: "Product Id missing." };
  }
  try {
    const product = await db.product.findUnique({
      where: {
        id: productId,
      },
    });
    return { product, success: true, message: "Product fetched successfully." };
  } catch (_error) {
    return { success: false, message: `${_error}` };
  }
};

export const deleteProduct = async ({ productId }: { productId: string }) => {
  if (productId === "") {
    return { success: false, message: "Product Id missing." };
  }
  try {
    await db.product.delete({
      where: {
        id: productId,
      },
    });
  } catch (_error) {
    return { success: false, message: `${_error}` };
  }
};
