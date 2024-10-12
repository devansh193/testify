import { z } from "zod";

export const QuestionSchema = z.object({
  text: z.string().min(1),
  type: z.enum(["rating", "text"]),
});

export const CreateProductSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  showLogo: z.boolean(),
  logoUrl: z.string().url().optional(),
  questions: z.array(QuestionSchema).min(1),
  userId: z.string().uuid(),
});

export const UserIdSchema = z.string().uuid();
export const ProductIdSchema = z.string().uuid();
export const TitleSchema = z.string().min(1);
