import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBoard } from "@/action/board";
import { ServerActionReturnType } from "@/types/api.types";
import { BoardSchema } from "@/schema";
import { z } from "zod";

type CreateBoardInput = z.infer<typeof BoardSchema>;

export const useCreateBoard = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ServerActionReturnType, Error, CreateBoardInput>(
    {
      mutationFn: async (data) => {
        const response = await createBoard(data);
        if (!response.status) {
          throw new Error(response.message);
        }
        return response;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["boards"] });
      },
      onError: (error) => {
        console.error("Error creating board:", error.message);
      },
    }
  );
  return mutation;
};
