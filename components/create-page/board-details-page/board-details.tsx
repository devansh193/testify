"use client";
import { useRecoilValue } from "recoil";
import {
  feedbackDescriptionAtom,
  feedbackPageTitleAtom,
  isVideoReviewEnabledAtom,
} from "@/recoil/atom";
import { Button } from "../../ui/button";
import { Pencil, Video } from "lucide-react";
import { CreateNav } from "../create-page-navbar";

export default function BoardDetails() {
  const title = useRecoilValue(feedbackPageTitleAtom);
  const description = useRecoilValue(feedbackDescriptionAtom);
  const video = useRecoilValue(isVideoReviewEnabledAtom);

  return (
    <div className="flex flex-col p-4 md:p-8">
      {/* Navbar */}
      <CreateNav />
      {/* Main content */}
      <div className="flex items-center justify-center mt-24 sm:mt-48">
        <div className="max-w-[600px] flex flex-col items-start justify-start gap-y-4 sm:gap-y-2">
          <h1 className="text-5xl">{title}</h1>
          <p className="text-xl mt-2 text-justify">{description}</p>
          <div className="space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
            <Button size={"lg"} className="h-[45px] w-full sm:w-auto">
              <Pencil className="mr-2" />
              Write a review
            </Button>
            {video && (
              <Button
                size={"lg"}
                className="h-[45px] w-full sm:w-auto"
                variant={"outline"}
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
}
