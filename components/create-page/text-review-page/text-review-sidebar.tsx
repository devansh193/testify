"use client";
import { SlideButton } from "../create-page-slide-button";
import QuestionsInput from "./textReview-questions-input";
import { RatingTitleInput } from "./textReview-page-title-input";
import Testify from "@/components/logo/testify";

export const TextReviewSidebar = () => {
  return (
    <div className="w-[450px] flex flex-col h-full">
      <div className="space-y-6 p-2 flex-grow">
        <div>
          <Testify />
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
