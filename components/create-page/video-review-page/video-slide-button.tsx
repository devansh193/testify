import { Button } from "@/components/ui/button";
import { videoSlideSelector } from "@/recoil/atom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const VideoSlideButton = () => {
  const currentSlide = useRecoilValue(videoSlideSelector);
  const setSlide = useSetRecoilState(videoSlideSelector);

  const handleNextClick = () => {
    setSlide((slide) => slide + 1);
  };

  const handlePrevClick = () => {
    setSlide((slide) => slide - 1);
  };
  return (
    <div className="flex items-center justify-between gap-x-2">
      <Button
        className="w-full"
        variant={"outline"}
        onClick={handlePrevClick}
        disabled={currentSlide === 0}
      >
        <ArrowLeft className="mr-2 size-5" />
        Slide
      </Button>
      <Button className="w-full" variant={"outline"} onClick={handleNextClick}>
        Slide
        <ArrowRight className="ml-2 size-5" />
      </Button>
    </div>
  );
};
