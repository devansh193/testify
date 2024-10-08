import { z } from "zod";

export const emailSchema = z
  .string({ message: "Email is required" })
  .email({ message: "Invalid email" });

export const passwordSchema = z
  .string({ message: "Password is required" })
  .min(8, { message: "Password must be at least 8 characters" })
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
    message:
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  });

export const nameSchema = z
  .string({ message: "Name is required" })
  .min(2, { message: "Too short" });

export const productSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required." })
    .max(255, { message: "Title cannot exceed 255 characters." })
    .regex(/^[a-zA-Z0-9\s\-_.]+$/, {
      message:
        "Title must contain only letters, numbers, spaces, and allowed symbols (-, _, .).",
    }),
  description: z.string({
    required_error: "Description is required.",
    invalid_type_error: "Invalid type of description.",
  }),
  showLogo: z.boolean(),
  logoUrl: z
    .string()
    .nullable()
    .transform((val) => val ?? null),
  questions: z
    .array(
      z.object({
        text: z.string({
          required_error: "Question text is required.",
          invalid_type_error: "Invalid type for question text.",
        }),
        type: z.string({
          required_error: "Question type is required.",
          invalid_type_error: "Invalid type for question type.",
        }),
      })
    )
    .nonempty({ message: "At least one question is required." }),
  userId: z.string({
    required_error: "User ID error.",
  }),
});

export const productIdSchema = z.string().uuid();
export const userIdSchema = z.string().uuid();
export type ProductDetails = z.infer<typeof productSchema>;
