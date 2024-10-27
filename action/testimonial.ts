"use server";
import db from "@/lib/db";

interface createTestimonialProp {
  name: string;
  email: string;
  textReview: string;
  rating: number;
  productId: string;
}

export const createTestimonial = async (data: createTestimonialProp) => {
  const { name, email, textReview, rating, productId } = data;
  try {
    await db.testimonial.create({
      data: {
        name,
        email,
        textReview,
        rating,
        product: {
          connect: {
            id: productId,
          },
        },
      },
    });
    return {
      success: true,
      stats: 201,
      message: "Review submitted successfully.",
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    return {
      success: false,
      status: 500,
      message: "Internal server error.",
    };
  }
};
