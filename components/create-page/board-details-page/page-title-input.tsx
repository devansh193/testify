"use client";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { feedbackPageTitleAtom } from "@/recoil/atom";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { feedbackPageTitleErrorSelector } from "@/recoil/selectors";

export const TitleInput = () => {
  const [title, setTitle] = useRecoilState(feedbackPageTitleAtom);
  const error = useRecoilValue(feedbackPageTitleErrorSelector);

  return (
    <div>
      <Label htmlFor="title" className="text-md font-semibold">
        Page Title
      </Label>
      <Input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Your product title"
        className={`mt-1`}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}{" "}
      {/* Show error */}
    </div>
  );
};
