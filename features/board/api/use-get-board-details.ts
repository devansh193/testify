import { getBoardByTitle } from "@/action/board";
import { useQuery } from "@tanstack/react-query";

export const useGetBoardDetails = (data: string) => {
  return useQuery({
    queryKey: ["board", data],
    queryFn: async ({ queryKey }) => {
      const [_, data] = queryKey;
      const response = await getBoardByTitle("Testify");
      if (!response.status) {
        throw new Error(response.message);
      }
      return response.additional;
    },
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
