import { z } from "zod";
import { CreateProductSchema } from "@/schema/schema";

export type RequestType = z.infer<typeof CreateProductSchema>;

export type ResponseType = {
  success: boolean;
  message: string;
  product?: z.infer<typeof CreateProductSchema>;
};

export type Context = {
  toastId: string | number;
};
