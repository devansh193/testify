import { DescriptionInput } from "./page-description-input";
import { TitleInput } from "./page-title-input";
import { VideoToggle } from "./video-toggle";
import { SlideButton } from "../create-page-slide-button";
import Testify from "@/components/logo/testify";
import { BoardInput } from "./board-title-input";

export const ProductDetailSidebar = () => {
  return (
    <div className="w-[450px] flex flex-col h-full">
      <div className="space-y-6 p-2 flex-grow">
        <div>
          <Testify />
        </div>
        <div>
          <h1 className="text-lg font-semibold">Product details</h1>
        </div>
        <BoardInput />
        <TitleInput />
        <DescriptionInput />
        <VideoToggle />
      </div>
      <div className="p-4 bottom-0">
        <SlideButton />
      </div>
    </div>
  );
};
