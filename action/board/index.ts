"use server";
import prisma from "@/lib/db";
import { AuthResponse, BoardSchema } from "@/schema/schema";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export type CreateBoardInput = z.infer<typeof BoardSchema>;

export async function createBoard(
  data: CreateBoardInput
): Promise<AuthResponse> {
  try {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    if (!user) {
      return {
        success: false,
        status: 401,
        message: "Login required.",
      };
    }
    const validatedData = BoardSchema.safeParse(data);
    if (!validatedData.success) {
      return {
        success: false,
        status: 400,
        message: "Invalid board data",
      };
    }
    const boardData = validatedData.data;
    const existingBoard = await prisma.board.findUnique({
      where: {
        userId: boardData.userId,
        boardTitle: boardData.boardTitle,
      },
    });

    if (existingBoard) {
      return {
        success: false,
        status: 409,
        message: "A board with this title already exists",
      };
    }

    if (boardData.isVideoReview && boardData.videoQuestions.length === 0) {
      return {
        success: false,
        status: 400,
        message: "Video questions are required for video reviews",
      };
    }
    if (!boardData.isVideoReview && boardData.textQuestions.length === 0) {
      return {
        success: false,
        status: 400,
        message: "Text questions are required for text reviews",
      };
    }

    const boardCreationData = {
      boardTitle: boardData.boardTitle,
      pageTitle: boardData.pageTitle,
      pageDescription: boardData.pageDescription ?? [],
      isVideoReview: boardData.isVideoReview,
      textReviewPageTitle: boardData.textReviewPageTitle,
      textQuestions: boardData.textQuestions ?? [],
      videoReviewPageTitle: boardData.videoReviewPageTitle,
      videoQuestions: boardData.videoQuestions ?? [],
      personalPageTitle: boardData.personalPageTitle,
      thankYouPageTitle: boardData.thankYouPageTitle,
      thankYouPageMessage: boardData.thankYouPageMessage,
      thankyouPageImage: boardData.thankYouPageImage,
      userId: boardData.userId,
    };
    await prisma.$transaction(async (prisma) => {
      await prisma.board.create({
        data: boardCreationData,
      });
    });
    return {
      success: true,
      status: 201,
      message: "Board created successfully",
    };
  } catch (_error) {
    console.error("Error creating board:", _error);
    return {
      success: false,
      status: 500,
      message: "Internal server error. Please try again later.",
    };
  }
}
