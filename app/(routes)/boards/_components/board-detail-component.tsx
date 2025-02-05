"use client";

import { LoadingComponent } from "@/app/(review)/_components/loading";
import { ErrorComponent } from "../../_components/board-components/board-error";
import { useGetBoardDetailsById } from "@/features/board/api/use-get-board-details-by-id";

export const BoardDetailComponent = ({ id }: { id: string }) => {
  const { data, isLoading, isError, refetch } = useGetBoardDetailsById(id);
  return isLoading ? (
    <LoadingComponent />
  ) : isError ? (
    <ErrorComponent onRetry={refetch} />
  ) : (
    <div className="p-4">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
        <h1>{id}</h1>
        <h1>{data?.boardTitle}</h1>
        <h1>{data?.id}</h1>
        <h1>{data?.pageDescription}</h1>
      </div>
    </div>
  );
};
