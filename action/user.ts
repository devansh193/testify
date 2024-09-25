"use server";
import db from "@/lib/db";

export async function createUser(name: string, email: string, password: string) {
  try {
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { success: false, message: "User with this email already exists" };
    }
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return { success: true, message: "User created successfully", user: newUser };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: "Failed to create user" };
  }
}
