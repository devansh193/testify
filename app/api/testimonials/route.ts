export const dynamic = "force-dynamic";

import { ApiResponse } from "@/lib/apiResponse";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const boardId = searchParams.get("boardId");
    const limit = searchParams.get("limit") || "10";
    const cursor = searchParams.get("cursor");

    if (!boardId) {
      return ApiResponse.error("boardId is required.", 400);
    }
    const parsedLimit = parseInt(limit, 10);
    if (isNaN(parsedLimit) || parsedLimit <= 0 || parsedLimit > 100) {
      return ApiResponse.error(
        "Limit must be a number between 1 and 100.",
        400
      );
    }
    const testimonials = await prisma.testimonial.findMany({
      where: { boardId: boardId },
      skip: cursor ? 1 : 0,
      cursor: cursor ? { id: cursor } : undefined,
      take: parsedLimit,
      orderBy: { id: "asc" },
    });

    const nextCursor =
      testimonials.length > 0 ? testimonials[testimonials.length - 1].id : null;
    const total = await prisma.testimonial.count({
      where: { boardId: boardId },
    });

    return ApiResponse.success(
      {
        items: testimonials,
        pagination: { nextCursor, limit: parsedLimit },
        total,
      },
      "Testimonials fetched successfully."
    );
  } catch (error) {
    console.error("Error fetching testimonials:", error);

    return ApiResponse.error(
      "Internal Server Error",
      500,
      error instanceof Error ? error.message : "Unknown error"
    );
  }
}
