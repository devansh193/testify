import db from "@/lib/db";

export async function submitReview(input: {
  productId: string;
  textReview: string;
  rating: number;
}) {
  const { productId, textReview, rating } = input;

  try {
    const testimonial = await db.testimonial.create({
      data: {
        productId,
        answers: {
          create: [
            {
              textResponse: textReview,
              rating: rating,
            },
          ],
        },
      },
    });

    return {
      success: true,
      message: "Review submitted successfully.",
      testimonial,
    };
  } catch (error) {
    console.error("Error saving review:", error);
    return { success: false, message: "Failed to submit review.", error };
  }
}
