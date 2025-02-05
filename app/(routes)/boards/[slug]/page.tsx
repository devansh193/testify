import { BoardDetailComponent } from "../_components/board-detail-component";
import { BoardDetailHeader } from "../_components/board-details-header";

const BoardDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  return (
    <div className="bg-white w-full h-full shadow-lg">
      <BoardDetailHeader />
      <BoardDetailComponent id={slug} />
    </div>
  );
};

export default BoardDetail;
