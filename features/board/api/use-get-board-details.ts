import { getBoardByTitle } from "@/action/board";
import { useQuery } from "@tanstack/react-query";

export const useGetBoardDetails = (title: string) => {
  return useQuery({
    queryKey: ["board"],
    queryFn: async () => {
      const response = await getBoardByTitle(title);
      if (!response.status) {
        throw new Error(response.message);
      }
      return response.additional;
    },
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
