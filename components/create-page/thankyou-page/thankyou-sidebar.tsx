"use client";

import TestifyLogo from "@/components/Logo";
import { SlideButton } from "../slide-button";
import { ThankyouInput } from "./thankyou-message";

export const ThankyouSidebar = () => {
  return (
    <div className="w-[350px] flex flex-col h-full">
      <div className="space-y-6 p-4 flex-grow">
        <div>
          <TestifyLogo />
        </div>
        <div>
          <h1 className="text-lg font-semibold">Personal details</h1>
        </div>
        <ThankyouInput />
      </div>
      <div className="p-4 bottom-0">
        <SlideButton />
      </div>
    </div>
  );
};
