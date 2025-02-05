"use client";

import { useGetBoardDetailsById } from "@/features/board/api/use-get-board-details-by-id";

export const BoardDetailComponent = ({ id }: { id: string }) => {
  const { data, isLoading, error, refetch } = useGetBoardDetailsById(id);

  // Safely handle the data by ensuring it's serializable
  const safeData = data ? JSON.parse(JSON.stringify(data)) : null;

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error loading board details</div>
      ) : (
        <div>
          <pre>{JSON.stringify(safeData, null, 2)}</pre>
        </div>
      )}
    </>
  );
};
