"use server";
import prisma from "@/lib/db";
import { BoardSchema } from "@/schema/schema";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Board } from "@prisma/client";
import { withSession } from "@/lib/session";
import { ServerActionReturnType } from "@/types/api.types";
import { ErrorHandler } from "@/lib/error";
import { SuccessResponse } from "@/lib/success";

export type CreateBoardInput = z.infer<typeof BoardSchema>;

export const createBoard = withSession<
  CreateBoardInput,
  ServerActionReturnType
>(async (data) => {
  const auth = await getServerSession(authOptions);
  if (!auth || !auth.user) {
    throw new ErrorHandler("Not authorized", "UNAUTHORIZED");
  }
  const result = BoardSchema.parse(data);
  const {
    boardTitle,
    pageTitle,
    pageDescription,
    isVideoReview,
    textReviewPageTitle,
    textQuestions,
    videoReviewPageTitle,
    videoQuestions,
    personalPageTitle,
    thankYouPageTitle,
    thankYouPageMessage,
    thankYouPageImage,
    userId,
  } = result;
  await prisma.board.create({
    data: {
      boardTitle: boardTitle,
      pageTitle: pageTitle,
      pageDescription: pageDescription,
      isVideoReview: isVideoReview,
      textReviewPageTitle: textReviewPageTitle,
      textQuestions: textQuestions,
      videoReviewPageTitle: videoReviewPageTitle,
      videoQuestions: videoQuestions,
      personalPageTitle: personalPageTitle,
      thankYouPageTitle: thankYouPageTitle,
      thankYouPageMessage: thankYouPageMessage,
      thankYouPageImage: thankYouPageImage,
      userId: userId,
    },
  });
  const message = "Board created successfully.";
  return new SuccessResponse(message, 201).serialize();
});

export const getAllBoards = withSession<
  undefined,
  ServerActionReturnType<Board[]>
>(async (session) => {
  const userId = session.user.id;

  const boards = await prisma.board.findMany({
    where: {
      userId: userId,
    },
    orderBy: { createdAt: "desc" },
  });
  const message = "Boards fetched successfully";
  return new SuccessResponse(message, 200, boards).serialize();
});

export const getBoardById = withSession<string, ServerActionReturnType<Board>>(
  async (session, boardId) => {
    if (!boardId) {
      throw new ErrorHandler("Board ID is required.", "BAD_REQUEST");
    }
    const userId = session.user.id;
    const board = await prisma.board.findUnique({
      where: {
        id: boardId,
      },
    });
    if (!board || board.userId !== userId) {
      throw new ErrorHandler(
        "Board not found or unauthorized access.",
        "UNAUTHORIZED"
      );
    }
    const message = "Board fetched successfully.";
    return new SuccessResponse(message, 200, board);
  }
);
