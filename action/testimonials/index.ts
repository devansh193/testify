import { withServerActionAsyncCatcher } from "@/lib/async-catch";
import prisma from "@/lib/db";
import { ErrorHandler } from "@/lib/error";
import { withSession } from "@/lib/session";
import { SuccessResponse } from "@/lib/success";
import { TestimonialSchema, TestimonialType } from "@/schema/schema";
import { ServerActionReturnType } from "@/types/api.types";
import { Testimonial } from "@prisma/client";

// Creating a new testimonial.
export const createTestimonial = withServerActionAsyncCatcher<
  TestimonialType,
  ServerActionReturnType
>(async (data) => {
  const result = TestimonialSchema.parse(data);
  const { name, email, textReview, rating, userImageUrl, videoUrl, boardId } =
    result;
  await prisma.testimonial.create({
    data: {
      name,
      email,
      userImageUrl,
      textReview,
      rating,
      videoUrl,
      boardId,
    },
  });
  const message = "Testimonial submitted successfully.";
  return new SuccessResponse(message, 201).serialize();
});

// Fetching all testimonials associated with the boardId
export const getAllTestimonials = withSession<
  string,
  ServerActionReturnType<Testimonial[]>
>(async (session, boardId) => {
  if (!boardId || !session.user.id) {
    throw new ErrorHandler("Board ID is required.", "BAD_REQUEST");
  }
  const testimonials = await prisma.testimonial.findMany({
    where: {
      boardId: boardId,
    },
  });
  const message = "Testimonials fetched successfully.";
  return new SuccessResponse(message, 200, testimonials);
});

// Fetching testimonial by uniqueID
export const getTestimonialById = withSession<
  string,
  ServerActionReturnType<Testimonial>
>(async (session, id) => {
  if (!id || !session.user.id) {
    throw new ErrorHandler("ID is required.", "BAD_REQUEST");
  }
  const testimonial = await prisma.testimonial.findUnique({
    where: {
      id: id,
    },
  });
  if (!testimonial) {
    throw new ErrorHandler("Testimonial not found.", "NOT_FOUND");
  }
  const message = "Testimonial fetched successfully.";
  return new SuccessResponse(message, 201, testimonial);
});
