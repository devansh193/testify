import { Account, User } from "@prisma/client";
import { z } from "zod";

export interface ApiResponse<T = void> {
  success: boolean;
  status: number;
  message: string;
  data?: T;
  errors?: z.ZodError | unknown;
}
export type DatabaseOperation<T> = Promise<ApiResponse<T>>;

export interface AuthResponse {
  success: boolean;
  status: number;
  message: string;
  user?: User;
  account?: Account;
  errors?: unknown;
}
