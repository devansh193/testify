import { DescriptionInput } from "./description-input";
import { ImageInput } from "./image-input";
import { TitleInput } from "./title-input";
import { VideoToggle } from "./video-toggle";
import { SlideButton } from "../slide-button";
import Testify from "@/components/logo/testify";

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
        <TitleInput />
        <DescriptionInput />
        <ImageInput />
        <VideoToggle />
      </div>
      <div className="p-4 bottom-0">
        <SlideButton />
      </div>
    </div>
  );
};
