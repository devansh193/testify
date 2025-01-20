import { BoardContent } from "../_components/board-components/board-content";
import { BoardHeader } from "../_components/board-components/board-header";

export default function Board() {
  return (
    <div className="bg-white w-full h-full shadow-lg">
      <div className="p-4">
        <BoardHeader />
        <BoardContent />
      </div>
    </div>
  );
}
