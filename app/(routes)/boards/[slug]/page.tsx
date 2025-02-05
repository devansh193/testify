import { BoardDetailComponent } from "../_components/board-detail-component";
import { BoardDetailHeader } from "../_components/board-details-header";

const BoardDetail = async ({ params }: { params: { slug: string } }) => {
  const id = params.slug;
  return (
    <div className="bg-white w-full h-full shadow-lg">
      <BoardDetailHeader />
      <BoardDetailComponent id={id} />
    </div>
  );
};

export default BoardDetail;
