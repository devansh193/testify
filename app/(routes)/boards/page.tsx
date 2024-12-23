import { Search } from "lucide-react";
import { BoardContent } from "../_components/board-components/board-content";

export default function Board() {
  return (
    <div className=" bg-white w-full h-full shadow-lg">
      <div className="m-4">
        <div className="flex items-center justify-between my-4">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold font-sans">Boards</h1>
            <p className="font-sans text-sm text-neutral-500 font-medium">
              Manage your boards and collect testimonials.
            </p>
          </div>
          <div className="mt-2 flex items-center justify-center border-2 border-[#EEEFF0] pl-2 rounded-lg">
            <Search className="text-[#414651] font-normal" />
            <input
              className="bg-[#FFFFFF] h-[40px] w-full md:w-[400px] p-2 placeholder:text-[#414651]"
              placeholder="Search board"
            />
          </div>
        </div>
        <div>
          <BoardContent />
        </div>
      </div>
    </div>
  );
}
