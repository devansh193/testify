import { NextResponse } from "next/server";
import { Testimonial } from "@prisma/client";
import prisma from "@/lib/db";

export async function GET(request: Request): Promise<NextResponse> {
  const url = new URL(request.url);
  const boardId = url.searchParams.get("boardId");
  if (!boardId || typeof boardId !== "string" || boardId.length === 0) {
    return NextResponse.json(
      { error: "Invalid or missing boardId" },
      { status: 400 }
    );
  }
  try {
    const testimonials: Testimonial[] = await prisma.testimonial.findMany({
      where: { boardId: boardId },
    });
    if (testimonials.length === 0) {
      return NextResponse.json(
        { error: "Testimonials not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
