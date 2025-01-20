import { getAllBoards } from "@/action/board";
import { useQuery } from "@tanstack/react-query";

export const useGetBoards = () => {
  return useQuery({
    queryKey: ["boards"],
    queryFn: async () => {
      const response = await getAllBoards();
      if (!response.status) {
        throw new Error(response.message);
      }
      return response.additional;
    },
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
