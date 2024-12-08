"use client";
import { useSetRecoilState } from "recoil";
import { Button } from "../ui/button";
import { slideAtom } from "@/recoil/atom";

export const SlideButton = () => {
  const setSlide = useSetRecoilState(slideAtom);
  const handleNextClick = () => {
    setSlide((slide) => slide + 1);
  };
  const handlePrevClick = () => {
    setSlide((slide) => slide - 1);
  };
  return (
    <div className="flex items-center justify-between">
      <Button onClick={handlePrevClick}>Previous</Button>
      <Button onClick={handleNextClick}>Next</Button>
    </div>
  );
};
