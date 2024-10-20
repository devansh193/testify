"use server";
import db from "@/lib/db";
import { ErrorHandler } from "@/lib/error";
import { SuccessResponse } from "@/lib/success";
import bcrypt from "bcrypt";

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  try {
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ErrorHandler("User with email already exist.", "CONFLICT");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    throw new SuccessResponse("User created successfully.", 201);
  } catch (_error) {
    if (_error instanceof ErrorHandler) {
      throw _error;
    }
    throw new ErrorHandler("Internal server error.", "INTERNAL_SERVER_ERROR");
  }
}
