import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, title, description, questions } = body;

    if (!title || !questions) {
      return NextResponse.json(
        { error: "Title or description is missing." },
        { status: 400 }
      );
    }
    const existingProduct = await db.product.findFirst({
      where: {
        title: {
          equals: title,
          mode: "insensitive",
        },
      },
    });

    if (existingProduct) {
      return NextResponse.json(
        { success: "false", message: "Product already exists." },
        { status: 201 }
      );
    }

    const product = await db.product.create({
      data: {
        title,
        description,
        user: {
          connect: {
            id: userId,
          },
        },
        questions: {
          create: questions,
        },
      },
    });
    return NextResponse.json(
      { success: "true", message: "Product created successfully." },
      { status: 201 }
    );
  } catch (_error) {
    console.log(_error);
    return NextResponse.json(
      { success: "false", message: "Failed to create product." },
      { status: 500 }
    );
  }
}
