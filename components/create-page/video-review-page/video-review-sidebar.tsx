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
    <div className="w-[450px] flex flex-col h-full">
      <div className="space-y-6 p-2 flex-grow">
        <div>
          <Testify />
        </div>
        <div>
          <h1 className="text-lg font-semibold">Video review</h1>
        </div>
        <VideoTitleInput />
        <VideoQuestionsInput />
      </div>
      <div className="p-4 bottom-0 space-y-4">
        <VideoSlideButton />
        <Button className="w-full bg-neutral-200 text-black hover:bg-neutral-100">
          <Trash2 className="size-5 mr-2" /> Reset changes
        </Button>
        <SlideButton />
      </div>
    </div>
  );
};
