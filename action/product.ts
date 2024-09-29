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
