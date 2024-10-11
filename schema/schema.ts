import { z } from "zod";

const QuestionTypeEnum = z.enum(["rating", "text"]);

const signInFormSchema = z.object({
  email: z.string().email({
    message: "Email is required.",
  }),
});
const signUpFormSchema = z.object({
  name: z.string({ message: "Name is required." }),
  email: z.string().email({ message: "Email is required." }),
  passwordSchema: z
    .string({ message: "Password is required." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),
});
const AnswerSchema = z.object({
  id: z.string().uuid(),
  textResponse: z.string().nullable(),
  rating: z.number().int().min(1).max(5).nullable(),
  questionId: z.string().uuid(),
  testimonialId: z.string().uuid(),
});

const QuestionSchema = z.object({
  id: z.string().uuid(),
  text: z.string(),
  type: QuestionTypeEnum,
  productId: z.string().uuid(),
  answers: z.array(AnswerSchema),
});

const TestimonialSchema = z.object({
  id: z.string().uuid(),
  productId: z.string().uuid(),
  answers: z.array(AnswerSchema),
});

const ProductSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  showLogo: z.boolean(),
  logoUrl: z.string().url().nullable(),
  userId: z.string(),
  questions: z.array(QuestionSchema),
  testimonials: z.array(TestimonialSchema),
});

export {
  ProductSchema,
  TestimonialSchema,
  QuestionSchema,
  AnswerSchema,
  QuestionTypeEnum,
  signInFormSchema,
  signUpFormSchema,
};
