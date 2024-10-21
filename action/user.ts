"use server";
import db from "@/lib/db";
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
      return {
        success: false,
        message: "User with email already exist. Go to Sign-in",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return {
      success: true,
      status: 201,
      message: "User created successfully.",
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    return {
      success: false,
      message: "Internal server error.",
    };
  }
}
