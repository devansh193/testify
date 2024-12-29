"use client";

import { Trash2 } from "lucide-react";
import { SlideButton } from "../create-page-slide-button";
import VideoQuestionsInput from "./videoReview-page-questions-input";
import { VideoSlideButton } from "./video-slide-button";
import { Button } from "@/components/ui/button";
import Testify from "@/components/logo/testify";
import { VideoTitleInput } from "./videoReview-page-title-input";

export const VideoReviewSidebar = () => {
  return (
    <div className="w-full lg:w-[450px] flex flex-col h-full max-h-screen overflow-y-auto">
      <div className="space-y-4 sm:space-y-6 p-4 flex-grow">
        <div className="flex justify-center lg:justify-start">
          <Testify />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">Video review</h1>
        </div>
        <VideoTitleInput />
        <VideoQuestionsInput />
      </div>
      <div className="p-4 sticky bottom-0 bg-[#F5F5F5] space-y-3 sm:space-y-4">
        <VideoSlideButton />
        <Button className="w-full bg-neutral-200 text-black hover:bg-neutral-100">
          <Trash2 className="size-4 sm:size-5 mr-2" /> Reset changes
        </Button>
        <SlideButton />
      </div>
    </div>
  );
};