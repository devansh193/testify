import db from "@/lib/db";
import { hash } from "bcrypt";
import {
  emailSchema,
  passwordSchema,
  nameSchema,
} from "@/schema/credential-schema";

export const createUser = async (
  email: string,
  password: string,
  name: string
) => {
  const validatedEmail = emailSchema.safeParse(email);
  const validatedPassword = passwordSchema.safeParse(password);
  const validatedName = nameSchema.safeParse(name);

  if (
    !validatedEmail.success ||
    !validatedPassword.success ||
    !validatedName.success
  ) {
    throw new Error("Invalid email, password or name format");
  }
  try {
    const existingUser = await db.user.findUnique({
      where: { email: validatedEmail.data },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hash(validatedPassword.data, 10);

    const newUser = await db.user.create({
      data: {
        email: validatedEmail.data,
        password: hashedPassword,
        name,
      },
    });

    return { message: "User created successfully", user: newUser };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error creating user:", error.message);
      throw new Error("Internal server error: " + error.message);
    } else {
      console.error("Unexpected error creating user:", error);
      throw new Error("Unexpected internal server error");
    }
  }
};
