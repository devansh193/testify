import db from "@/lib/db";

type CreateProductProps = {
  title: string;
  description: string;
  questions: string[];
  rating: number;
  userId: string;
};

export const createProduct = async <T extends CreateProductProps>(
  props: T
): Promise<{
  success: boolean;
  message: string;
  product?: T;
  error?: string;
}> => {
  const { title, description, questions, rating, userId } = props;

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

    return {
      product: { ...product } as T,
      success: true,
      message: "Product created successfully",
    };
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, message: "Failed to create product", error };
  }
};
