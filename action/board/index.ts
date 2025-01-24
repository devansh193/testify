"use server";

import prisma from "@/lib/db";
import { BoardSchema } from "@/schema/schema";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { withSession } from "@/lib/session";
import { ServerActionReturnType } from "@/types/api.types";
import { Board } from "@prisma/client";
import { ErrorHandler } from "@/lib/error";
import { SuccessResponse } from "@/lib/success";
import { BoardResult } from "@/types";
import { equal } from "assert";
import { withServerActionAsyncCatcher } from "@/lib/async-catch";

export type CreateBoardInput = z.infer<typeof BoardSchema>;

// Create a new board

export const createBoard = withSession<
  CreateBoardInput,
  ServerActionReturnType
>(async (session, data) => {
  const auth = await getServerSession(authOptions);
  if (!auth || !auth.user) {
    throw new ErrorHandler("Not authorized", "UNAUTHORIZED");
  }
  const result = BoardSchema.parse(data);

  const check = await prisma.board.findUnique({
    where: {
      boardTitle: result.boardTitle,
    },
  });
  if (check) {
    throw new ErrorHandler("Board with this title already exists.", "CONFLICT");
  }
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
    userId,
  } = result;

  if (!result.userId) {
    throw new ErrorHandler("User Id is required", "BAD_REQUEST");
  }
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
      userId: userId,
    },
  });
  const message = "Board created successfully.";
  return new SuccessResponse(message, 201).serialize();
});

// get all boards
export const getAllBoards = withSession<
  undefined,
  ServerActionReturnType<BoardResult[]>
>(async (session) => {
  console.log("____________________aagayaaaa___________________");
  const userId = session.user.id;
  const boards = await prisma.board.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      isActive: true,
      boardTitle: true,
      _count: {
        select: {
          testimonials: true,
        },
      },
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });
  const boardResults: BoardResult[] = boards.map((board) => ({
    id: board.id,
    isActive: board.isActive ?? true,
    boardTitle: board.boardTitle,
    testimonialCount: board._count.testimonials,
    createdAt: board.createdAt.toISOString(),
  }));
  const message = "Boards fetched successfully";
  return new SuccessResponse(message, 200, boardResults).serialize();
});

// get board by id
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
// Get board details by board title.
export const getBoardByTitle = withServerActionAsyncCatcher<
  string,
  ServerActionReturnType<Board>
>(async (boardTitle) => {
  if (!boardTitle) {
    throw new ErrorHandler("Board title missing.", "BAD_REQUEST");
  }
  const board = await prisma.board.findFirst({
    where: {
      boardTitle: {
        equals: boardTitle,
        mode: "insensitive",
      },
    },
  });
  console.log("Board detail hai bc-----------", board);
  if (!board) {
    throw new ErrorHandler("Failed", "BAD_REQUEST");
  }
  const message = "Board fetched successfully.";
  return new SuccessResponse(message, 200, board);
});

// Delete board by board Id
export const deleteBoard = withSession<
  string,
  ServerActionReturnType<undefined>
>(async (session, boardId) => {
  if (!boardId) {
    throw new ErrorHandler("Board Id is required.", "BAD_REQUEST");
  }
  const result = prisma.board.delete({
    where: {
      id: boardId,
    },
  });
  if (!result) {
    throw new ErrorHandler("Failed to delete board.", "CONFLICT");
  }
  console.log("Deleted");
  const message = "Board deleted successfully.";
  return new SuccessResponse(message, 200, undefined).serialize();
});
