"use client";

import { SlideButton } from "../create-page-slide-button";
import { ThankyouInput } from "./thankyou-page-input";
import Testify from "@/components/logo/testify";

export const ThankyouSidebar = () => {
  return (
    <div className="w-full lg:w-[450px] flex flex-col h-full max-h-screen overflow-y-auto">
      <div className="space-y-4 sm:space-y-6 p-4 flex-grow">
        <div className="flex justify-center lg:justify-start">
          <Testify className="w-32 sm:w-40" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">Thank you page</h1>
        </div>
        <ThankyouInput />
      </div>
      <div className="p-4 sticky bottom-0 bg-[#F5F5F5]">
        <SlideButton />
      </div>
    </div>
  );
};
