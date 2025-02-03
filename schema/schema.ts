import { z } from "zod";

export const QuestionSchema = z.object({
  text: z.string().min(1),
});

export const ProductSchema = z.object({
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

export const UserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  image: z.string().optional(),
});

export const AccountSchema = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional(),
  access_token: z.string().optional(),
  expires_at: z.number().optional(),
  token_type: z.string().optional(),
  scope: z.string().optional(),
  id_token: z.string().optional(),
  session_state: z.string().optional(),
});

export const BoardSchema = z.object({
  boardTitle: z
    .string()
    .min(1, "Board title is required")
    .max(255, "Board title must be less than 255 characters"),

  pageTitle: z
    .string()
    .min(1, "Page title is required")
    .max(255, "Page title must be less than 255 characters"),

  pageDescription: z
    .string()
    .min(1, "Page description is required")
    .max(1000, "Page description must be less than 1000 characters"),

  isVideoReview: z.boolean(),

  textReviewPageTitle: z
    .string()
    .max(255, "Text review page title must be less than 255 characters")
    .nullable()
    .optional(),

  textQuestions: z.array(
    z
      .string()
      .min(1, "Question cannot be empty")
      .max(500, "Question must be less than 500 characters")
  ),

  videoReviewPageTitle: z
    .string()
    .min(1, "Video review page title is required")
    .max(255, "Video review page title must be less than 255 characters"),

  videoQuestions: z.array(
    z
      .string()
      .min(1, "Question cannot be empty")
      .max(500, "Question must be less than 500 characters")
  ),

  personalPageTitle: z
    .string()
    .min(1, "Personal page title is required")
    .max(255, "Personal page title must be less than 255 characters"),

  thankYouPageTitle: z
    .string()
    .min(1, "Thank you page title is required")
    .max(255, "Thank you page title must be less than 255 characters"),

  thankYouPageMessage: z
    .string()
    .min(1, "Thank you page message is required")
    .max(1000, "Thank you page message must be less than 1000 characters"),

  userId: z.string().uuid("Invalid user ID"),
});

export const TestimonialSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  textReview: z.string().min(1, "Text review is required"),
  rating: z.number().int().min(1).max(5),
  userImageUrl: z.string().url("Invalid URL").optional(),
  videoUrl: z.string().url("Invalid URL").optional(),
  boardId: z.string().uuid(),
});

export type TestimonialType = z.infer<typeof TestimonialSchema>;
export type EmailType = z.infer<typeof emailSchema>;
