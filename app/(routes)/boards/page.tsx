import { BoardContent } from "../_components/board-components/board-content";
import { BoardNavbar } from "../_components/board-components/board-navbar";
import { BoardHeader } from "../_components/board-components/board-header";

export default function Board() {
  return (
    <div className="bg-[#FAFAF8] w-full h-full shadow-lg">
      {/* Fixed Navbar */}
      <div className="">
        <BoardNavbar />
      </div>

      {/* Main Content */}
      <div className="m-4 mt-24">
        <BoardHeader />
        <div>
          <BoardContent />
        </div>
      </div>
    </div>
  );
}
