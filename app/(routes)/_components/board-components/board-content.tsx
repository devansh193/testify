"use client";
import { useGetBoards } from "@/features/board/api/use-get-boards";
import { LoadingComponent } from "./board-loading";
import { ErrorComponent } from "./board-error";
import { BoardCard } from "./board-card";

export const BoardContent = () => {
  const { data, isLoading, isError, refetch } = useGetBoards();
  return isLoading ? (
    <LoadingComponent />
  ) : isError ? (
    <ErrorComponent onRetry={refetch} />
  ) : (
    <div className="">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
        {data?.map((item) => (
          <BoardCard
            key={item.id}
            id={item.id}
            isActive={item.isActive}
            boardTitle={item.boardTitle}
            createdAt={item.createdAt}
            testimonialCount={item.testimonialCount}
          />
        ))}
      </div>
    </div>
  );
};
