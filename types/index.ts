import { z } from "zod";

export interface ApiResponse<T = void> {
  success: boolean;
  status: number;
  message: string;
  data?: T;
  errors?: z.ZodError | null;
}

export type DatabaseOperation<T> = Promise<ApiResponse<T>>;
