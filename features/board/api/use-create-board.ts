import { useMutation } from "@tanstack/react-query";
import { createBoard } from "@/action/board";
import { ServerActionReturnType } from "@/types/api.types";
import { BoardSchema } from "@/schema/schema";
import { z } from "zod";

type createBoardInput = z.infer<typeof BoardSchema>;
// create a new board using the createBoard action
export const useCreateBoard = () => {
  const mutation = useMutation<ServerActionReturnType, Error, createBoardInput>(
    {
      mutationFn: async (data) => {
        try {
          const response = await createBoard(data);
          if (!response.status) {
            throw new Error(response.message);
          }
          return response;
        } catch (error) {
          throw error instanceof Error
            ? error
            : new Error("Unexpected error occurred");
        }
      },
    }
  );
  return mutation;
};
