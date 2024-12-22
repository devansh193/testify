"use client";
import { SlideButton } from "../slide-button";
import { ThankyouInput } from "./thankyou-message";
import Testify from "@/components/logo/testify";

export const ThankyouSidebar = () => {
  return (
    <div className="w-[450px] flex flex-col h-full">
      <div className="space-y-6 p-2 flex-grow">
        <div>
          <Testify />
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
