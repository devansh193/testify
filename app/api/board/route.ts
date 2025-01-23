export const dynamic = "force-dynamic";

import prisma from "@/app/lib/db";
import { ApiResponse } from "@/lib/apiResponse";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const session = await getServerSession();
    if (!session) {
      return ApiResponse.error("Not authorized.", 401);
    }
    const { searchParams } = new URL(request.url);
    const boardName = searchParams.get("boardName") || undefined;
    const response = await prisma.board.findUnique({
      where: { boardTitle: boardName },
    });
    if (!response) {
      return ApiResponse.error("Board not found.", 404);
    }
    return ApiResponse.success(response, "Board fetched successfully.");
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return ApiResponse.error("Internal server error.", 500);
  }
}
