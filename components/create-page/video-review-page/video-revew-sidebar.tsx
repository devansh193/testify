"use client";
import { Trash2 } from "lucide-react";
import { SlideButton } from "../slide-button";
import VideoQuestionsInput from "./video-questions-input";
import { VideoSlideButton } from "./video-slide-button";
import { Button } from "@/components/ui/button";

export const VideoReviewSidebar = () => {
  return (
    <div className="w-[400px] border-r-2 border-gray-200 flex flex-col h-full">
      <div className="space-y-6 p-4 flex-grow">
        <div>
          <h1 className="text-lg font-semibold">Video review</h1>
        </div>
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
