import { DatabaseOperation } from "@/types";
import { z } from "zod";

export async function handleDatabaseOperation<T>(
  operation: () => Promise<T>,
  successMessage: string,
  errorMessage: string,
  validationSchema?: z.ZodSchema,
  data?: unknown
): Promise<DatabaseOperation<T>> {
  try {
    if (validationSchema && data) {
      validationSchema.parse(data);
    }

    const result = await operation();

    return {
      success: true,
      status: 200,
      message: successMessage,
      data: result,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        status: 400,
        message: "Validation error",
        errors: error,
      };
    }

    console.error(`${errorMessage}:`, error);
    return {
      success: false,
      status: 500,
      message: errorMessage,
    };
  }
}
