"use client";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { personalFeedbackTitleAtom } from "@/recoil/atom";
import { personalFeedbackTitleErrorSelector } from "@/recoil/selectors";

export const PersonalTitleInput = () => {
  const [title, setTitle] = useRecoilState(personalFeedbackTitleAtom);
  const error = useRecoilValue(personalFeedbackTitleErrorSelector);

  return (
    <div>
      <Label htmlFor="title" className="text-md font-semibold">
        Title
      </Label>
      <Input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Your product title"
        className={`mt-1 ${error ? "border-red-500" : ""}`} // Apply red border if error exists
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}{" "}
      {/* Display error */}
    </div>
  );
};
