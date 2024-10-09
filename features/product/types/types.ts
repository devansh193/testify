import { QuestionType } from "@prisma/client";

export interface RequestType {
  title: string;
  description: string;
  showLogo: boolean;
  logoUrl?: string;
  questions: {
    text: string;
    type: QuestionType;
  }[];
  userId: string;
}

export interface ResponseType {
  success: boolean;
  message: string;
  data?: unknown;
  error?: unknown;
}

export interface Context {
  toastId: string | number;
}
