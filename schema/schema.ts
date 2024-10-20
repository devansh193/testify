import { z } from "zod";

export const QuestionSchema = z.object({
  text: z.string().min(1),
});

export const CreateProductSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  showLogo: z.boolean(),
  logoUrl: z.string().url().optional(),
  questions: z.array(QuestionSchema).min(1),
  userId: z.string().uuid(),
});
export const emailSchema = z
  .string()
  .email({ message: "Invalid email address" });
export const passwordSchema = z
  .string()
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        "Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
    }
  );

export const UserIdSchema = z.string().uuid();
export const ProductIdSchema = z.string().uuid();
export const TitleSchema = z.string().min(1);

export const SigninSchema = z.object({
  email: z.string().email("Email is invalid").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});
