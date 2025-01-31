import { z } from "zod";
import { ProductSchema } from "@/schema";

export type RequestType = z.infer<typeof ProductSchema>;

export type ResponseType = {
  success: boolean;
  message: string;
  product?: z.infer<typeof ProductSchema>;
};

export type Context = {
  toastId: string | number;
};
