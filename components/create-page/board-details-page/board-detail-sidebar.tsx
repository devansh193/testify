import { DescriptionInput } from "./page-description-input";
import { TitleInput } from "./page-title-input";
import { VideoToggle } from "./video-toggle";
import { SlideButton } from "../create-page-slide-button";
import Testify from "@/components/logo/testify";
import { BoardInput } from "./board-title-input";

export const BoardDetailSidebar = () => {
  return (
    <div className="w-full lg:w-[450px] flex flex-col h-full max-h-screen overflow-y-auto">
      <div className="space-y-4 sm:space-y-6 p-4 flex-grow">
        <div className="flex justify-center lg:justify-start">
          <Testify />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">Product details</h1>
        </div>
        <BoardInput />
        <TitleInput />
        <DescriptionInput />
        <VideoToggle />
      </div>
      <div className="p-4 sticky bottom-0 bg-[#F5F5F5]">
        <SlideButton />
      </div>
    </div>
  );
};
