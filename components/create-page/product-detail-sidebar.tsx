import { DescriptionInput } from "./product-details/description-input";
import { ImageInput } from "./product-details/image-input";
import { TitleInput } from "./product-details/title-input";
import { VideoToggle } from "./product-details/video-toggle";
import { SlideButton } from "./slide-button";

export const ProductDetailSidebar = () => {
  return (
    <div className="w-[400px] border-r-2 border-gray-200 flex flex-col h-full">
      <div className="space-y-6 p-4 flex-grow">
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
