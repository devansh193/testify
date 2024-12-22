"use client";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "../ui/button";
import { slideSelector, isVideoReviewEnabledAtom } from "@/recoil/atom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const SlideButton = () => {
  const currentSlide = useRecoilValue(slideSelector);
  const videoReview = useRecoilValue(isVideoReviewEnabledAtom);
  const totalSlides = videoReview ? 5 : 4;

  const setSlide = useSetRecoilState(slideSelector);

  const handleNextClick = () => {
    setSlide((slide) => slide + 1);
  };

  const handlePrevClick = () => {
    setSlide((slide) => slide - 1);
  };

  const handleSubmitClick = () => {
    console.log("Form submitted");
  };

  return (
    <div className="flex items-center justify-between gap-x-2">
      <Button
        onClick={handlePrevClick}
        disabled={currentSlide === 0}
        className="w-full"
      >
        <ArrowLeft className="size-5 mr-2" />
        Previous
      </Button>
      {currentSlide === totalSlides - 1 ? (
        <Button onClick={handleSubmitClick} className="w-full">
          Submit
        </Button>
      ) : (
        <Button onClick={handleNextClick} className="w-full">
          Next
          <ArrowRight className="size-5 ml-2" />
        </Button>
      )}
    </div>
  );
};
