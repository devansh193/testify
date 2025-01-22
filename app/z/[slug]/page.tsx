import { ErrorComponent } from "@/app/(routes)/_components/board-components/board-error";
import { LoadingComponent } from "@/app/(routes)/_components/board-components/board-loading";
import { useGetBoardDetail } from "@/features/board/api/use-get-boards";
import { UserBoardDetail } from "../_components/user-board-details";

type Params = { slug: string };

export default function Page({ params }: { params: Params }) {
  const { slug } = params;
  const { data, isLoading, isError, refetch } = useGetBoardDetail({
    boardName: slug,
  });
  return isLoading ? (
    <LoadingComponent />
  ) : isError ? (
    <ErrorComponent onRetry={refetch} />
  ) : (
    <div className="h-full w-full bg-white">
      <UserBoardDetail
        title={data?.pageTitle ?? ""}
        description={data?.pageDescription ?? ""}
        isVideoReview={false}
      />
    </div>
  );
}
