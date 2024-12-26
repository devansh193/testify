"use client";

import { SlideButton } from "../create-page-slide-button";
import QuestionsInput from "./textReview-questions-input";
import { RatingTitleInput } from "./textReview-page-title-input";
import Testify from "@/components/logo/testify";

export const TextReviewSidebar = () => {
  return (
    <div className="w-full lg:w-[450px] flex flex-col h-full max-h-screen overflow-y-auto">
      <div className="space-y-4 sm:space-y-6 p-4 flex-grow">
        <div className="flex justify-center lg:justify-start">
          <Testify />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">Text review</h1>
        </div>
        <RatingTitleInput />
        <QuestionsInput />
      </div>
      <div className="p-4 sticky bottom-0 bg-[#F5F5F5]">
        <SlideButton />
      </div>
    </div>
  );
};
