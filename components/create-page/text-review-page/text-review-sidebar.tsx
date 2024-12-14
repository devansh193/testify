"use client";
import TestifyLogo from "@/components/Logo";
import { SlideButton } from "../slide-button";
import QuestionsInput from "./questions-input";
import { RatingTitleInput } from "./rating-title";

export const TextReviewSidebar = () => {
  return (
    <div className="w-[350px] flex flex-col h-full">
      <div className="space-y-6 p-4 flex-grow">
        <div>
          <TestifyLogo />
        </div>
        <div>
          <h1 className="text-lg font-semibold">Text review</h1>
        </div>
        <RatingTitleInput />
        <QuestionsInput />
      </div>
      <div className="p-4 bottom-0">
        <SlideButton />
      </div>
    </div>
  );
};
