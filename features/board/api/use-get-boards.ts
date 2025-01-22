import { getAllBoards, getBoardByTitle } from "@/action/board";
import { useQuery } from "@tanstack/react-query";

// Fetch all boards
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

// Fetch board detail by board title
export const useGetBoardDetail = ({ boardName }: { boardName: string }) => {
  return useQuery({
    queryKey: ["boardDetail"],
    queryFn: async () => {
      const response = await getBoardByTitle(boardName);
      if (!response.status) {
        throw new Error(response.message);
      }
      return response.additional;
    },
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
