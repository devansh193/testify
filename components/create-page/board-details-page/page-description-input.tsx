"use client";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { feedbackDescriptionAtom } from "@/recoil/atom";
import { feedbackDescriptionErrorSelector } from "@/recoil/selectors";

export const DescriptionInput = () => {
  const [description, setDescription] = useRecoilState(feedbackDescriptionAtom);
  const error = useRecoilValue(feedbackDescriptionErrorSelector);

  return (
    <div>
      <Label htmlFor="description" className="text-md font-semibold">
        Description
      </Label>
      <Textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Your product description"
        className={`mt-1 min-h-[100px] ${error ? "border-red-500" : ""}`}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}{" "}
      {/* Show error */}
    </div>
  );
};
