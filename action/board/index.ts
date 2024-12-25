"use server";
import prisma from "@/lib/db";
import { BoardSchema } from "@/schema/schema";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { ApiResponse, AuthResponse } from "@/types";
import { Board } from "@prisma/client";

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
        message: "User is not authenticated. Please log in to proceed.",
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

export async function getBoards({
  userId,
}: {
  userId: string;
}): Promise<ApiResponse<Board[]>> {
  try {
    const session = await getServerSession();
    if (!session) {
      return {
        success: false,
        status: 401,
        message: "User is not authenticated. Please log in to proceed.",
      };
    }

    const boards = await prisma.board.findMany({
      where: {
        userId: userId,
      },
      include: {
        testimonials: true,
      },
    });

    return {
      success: true,
      status: 200,
      message: "Boards fetched successfully",
      data: boards,
    };
  } catch (_error) {
    console.error("Error fetching boards:", _error);
    return {
      success: false,
      status: 500,
      message: "Internal server error. Please try again later.",
    };
  }
}

export async function getBoardById({
  boardId,
}: {
  boardId: string;
}): Promise<ApiResponse<Board>> {
  try {
    const session = await getServerSession();
    if (!session) {
      return {
        success: false,
        status: 401,
        message: "User is not authenticated. Please log in to proceed.",
      };
    }

    const board = await prisma.board.findUnique({
      where: {
        id: boardId,
      },
      include: {
        testimonials: true,
      },
    });

    if (!board) {
      return {
        success: false,
        status: 404,
        message: "Board not found",
      };
    }

    return {
      success: true,
      status: 200,
      message: "Board fetched successfully",
      data: board,
    };
  } catch (_error) {
    console.error("Error fetching board:", _error);
    return {
      success: false,
      status: 500,
      message: "Internal server error. Please try again later.",
    };
  }
}
