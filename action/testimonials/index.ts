"use server";
import { withServerActionAsyncCatcher } from "@/lib/async-catch";
// import { withServerActionAsyncCatcher } from "@/lib/async-catch";
import prisma from "@/lib/db";
import { ErrorHandler } from "@/lib/error";
import { withSession } from "@/lib/session";
import { SuccessResponse } from "@/lib/success";
import { TestimonialType, UserTestimonialSchema } from "@/schema";
import { ServerActionReturnType } from "@/types/api.types";
import { Testimonial } from "@prisma/client";

export const createTestimonial = withServerActionAsyncCatcher<
  TestimonialType,
  ServerActionReturnType
>(async (data) => {
  const result = UserTestimonialSchema.parse(data);
  const { name, email, textReview, rating, userImageUrl, videoUrl, boardId } =
    result;
  console.log(
    "_____________________Testimonial me aagaya hu mai_________________"
  );
  await prisma.testimonial.create({
    data: {
      name,
      email,
      userImageUrl,
      textReview,
      rating,
      videoUrl,
      boardId: boardId,
    },
  });
  const message = "Testimonial submitted successfully.";
  return new SuccessResponse(message, 201).serialize();
});

// fetch all testimonials by board id
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

// fetch all text testimonials by board id
export const getAllWrittenTestimonials = withSession<
  string,
  ServerActionReturnType<{ textReview: string }[]>
>(async (session, boardId) => {
  if (!boardId || !session.user.id) {
    throw new ErrorHandler("Board ID is required.", "BAD_REQUEST");
  }
  const testimonials = await prisma.testimonial.findMany({
    where: {
      boardId: boardId,
    },
    select: {
      textReview: true,
    },
  });
  const message = "Testimonials fetched successfully.";
  return new SuccessResponse(message, 200, testimonials);
});

// fetch testimonial by id
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
