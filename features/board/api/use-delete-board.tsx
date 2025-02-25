import { deleteBoard } from "@/action/board";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteBoard = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: string) => {
      const response = await deleteBoard(data);
      if (!response.success) {
        throw new Error(response.message);
      }
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["boards"] });
    },
  });
  return mutation;
};
