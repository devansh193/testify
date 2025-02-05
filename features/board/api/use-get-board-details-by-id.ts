import { getBoardById } from "@/action/board";
import { useQuery } from "@tanstack/react-query";

export const useGetBoardDetailsById = (id: string) => {
  return useQuery({
    queryKey: ["board_detail_by_id"],
    queryFn: async () => {
      const response = await getBoardById(id);
      if (!response.status) {
        throw new Error(response.message);
      }
      return response.additional;
    },
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
