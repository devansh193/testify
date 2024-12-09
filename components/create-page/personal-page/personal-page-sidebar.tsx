"use client";

import { SlideButton } from "../slide-button";
import { PersonalTitleInput } from "./personal-title";

export const PersonalSidebar = () => {
  return (
    <div className="w-[400px] border-r-2 border-gray-200 flex flex-col h-full">
      <div className="space-y-6 p-4 flex-grow">
        <div>
          <h1 className="text-lg font-semibold">Personal details</h1>
        </div>
        <PersonalTitleInput />
      </div>
      <div className="p-4 bottom-0">
        <SlideButton />
      </div>
    </div>
  );
};
