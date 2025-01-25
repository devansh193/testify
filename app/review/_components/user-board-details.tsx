"use client";
import { Button } from "@/components/ui/button";
import { userSlideSelector } from "@/recoil/atom";
import { Pencil, Video } from "lucide-react";
import { useSetRecoilState } from "recoil";

interface UserBoardDetailProps {
  title: string;
  description: string;
  isVideoReview: boolean;
}

export const UserBoardDetail = ({
  title,
  description,
  isVideoReview,
}: UserBoardDetailProps) => {
  const setSlide = useSetRecoilState(userSlideSelector);
  return (
    <div className="flex flex-col p-4 md:p-8">
      <div className="flex items-center justify-center mt-36 sm:mt-48">
        <div className="max-w-[600px] flex flex-col items-start justify-start gap-y-4 sm:gap-y-2">
          <h1 className="text-5xl text-black">{title}</h1>
          <p className="text-xl mt-2 text-justify text-black">{description}</p>
          <div className="space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
            <Button
              size={"lg"}
              className="h-[45px] w-full sm:w-auto"
              onClick={() => setSlide((slide) => slide + 1)}
            >
              <Pencil className="mr-2" />
              Write a review
            </Button>
            {isVideoReview && (
              <Button
                size={"lg"}
                className="h-[45px] w-full sm:w-auto"
                variant={"outline"}
                onClick={() => setSlide((slide) => slide + 2)}
              >
                <Video className="mr-2" />
                Record a video
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
