"use server";

import prisma from "@/lib/db";
import { AuthResponse, UserSchema } from "@/schema/schema";
import bcrypt from "bcrypt";
import { z } from "zod";

export async function createUser(
  name: string,
  email: string,
  password: string,
  provider: string = "credentials",
  providerAccountId: string | null = null
): Promise<AuthResponse> {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        success: false,
        status: 409,
        message: "User with email already exist. Go to Sign-in",
      };
    }
    const hashedPassword =
      provider === "credentials" ? await bcrypt.hash(password, 10) : null;

    const createUser = await prisma.$transaction(async (prisma) => {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
      await prisma.account.create({
        data: {
          userId: user.id,
          type: provider,
          provider,
          providerAccountId: providerAccountId ?? user.id,
        },
      });
      return user;
    });

    return {
      success: true,
      status: 201,
      message: "User created successfully.",
      user: createUser,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    console.log(_error);
    return {
      success: false,
      status: 409,
      message: "Internal server error.",
    };
  }
}

type CreateUserInput = z.infer<typeof UserSchema>;

export async function updateUser(userId: string, input: CreateUserInput) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return {
        success: false,
        status: 404,
        message: "User not found",
      };
    }
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        ...input,
        password: input.password
          ? await bcrypt.hash(input.password, 10)
          : undefined,
      },
    });
    return {
      success: true,
      status: 200,
      message: "User updated successfully",
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name,
      },
    };
  } catch (error) {
    console.error("User update error:", error);
    return {
      success: false,
      status: 500,
      message: "Failed to update user",
    };
  }
}

export async function deleteUser(userId: string) {
  try {
    await prisma.user.delete({
      where: { id: userId },
    });
    return {
      success: true,
      status: 200,
      message: "User deleted successfully",
    };
  } catch (error) {
    console.error("User deletion error:", error);
    return {
      success: false,
      status: 500,
      message: "Failed to delete user",
    };
  }
}
