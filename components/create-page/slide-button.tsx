"use client";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "../ui/button";
import { slideSelector } from "@/recoil/atom";

export const SlideButton = () => {
  const currentSlide = useRecoilValue(slideSelector);
  const totalSlides = 4;
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
    <div className="flex items-center justify-between">
      <Button onClick={handlePrevClick} disabled={currentSlide === 0}>
        Previous
      </Button>
      {currentSlide === totalSlides - 1 ? (
        <Button onClick={handleSubmitClick}>Submit</Button>
      ) : (
        <Button onClick={handleNextClick}>Next</Button>
      )}
    </div>
  );
};
