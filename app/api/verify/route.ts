import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 });
    }
    const dbToken = await prisma.token.findUnique({
      where: { token },
    });
    if (!dbToken) {
      return NextResponse.json({ error: "Invalid token" }, { status: 404 });
    }

    const currentTime = new Date();
    if (currentTime > dbToken.expireAt) {
      return NextResponse.json({ error: "Token has expired" }, { status: 410 });
    }
    // Updating email-verified field in table.
    await prisma.user.update({
      where: { id: dbToken.userId },
      data: {
        emailVerified: currentTime,
      },
    });
    return NextResponse.json(
      { message: "Token is valid", data: dbToken },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
