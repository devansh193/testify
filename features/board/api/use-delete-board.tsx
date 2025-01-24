import { deleteBoard } from "@/action/board";
import { ServerActionReturnType } from "@/types/api.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteBoard = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<ServerActionReturnType, Error, string>({
    mutationFn: async (data) => {
      try {
        const response = await deleteBoard(data);
        if (!response.status) {
          throw new Error(response.message);
        }
        queryClient.invalidateQueries({ queryKey: ["boards"] });
        return response;
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error("Unexpected error occurred");
      }
    },
  });
  return mutation;
};
