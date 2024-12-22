import { feedbackBoardTitleAtom } from "@/recoil/atom";
// import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRecoilValue } from "recoil";
import { SlideButton } from "./slide-button";

export const CreateNav = () => {
  const board = useRecoilValue(feedbackBoardTitleAtom);
  return (
    <div className="h-14 w-full flex items-center justify-between">
      <h1 className="text-xl md:text-2xl font-sans font-medium">{board}</h1>
      <div className="flex items-center justify-center gap-x-2">
        {/* <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </button> */}
        <SlideButton />
      </div>
    </div>
  );
};
