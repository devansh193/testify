import { useGetBoardDetails } from "@/features/board/api/use-get-board-details";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { data, isLoading, isError, error } = useGetBoardDetails(slug);

  if (isLoading) {
    return <div>Loading board details...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Board Details</h1>
      {data ? (
        <div>
          <h2>{data.boardTitle}</h2>
        </div>
      ) : (
        <p>No board found.</p>
      )}
    </div>
  );
}
