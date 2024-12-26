"use client";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { ratingTitleAtom } from "@/recoil/atom";
import { ratingTitleErrorSelector } from "@/recoil/selectors";

export const RatingTitleInput = () => {
  const [title, setTitle] = useRecoilState(ratingTitleAtom);
  const error = useRecoilValue(ratingTitleErrorSelector);

  return (
    <div>
      <Label htmlFor="title" className="text-md font-semibold">
        Title
      </Label>
      <Input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Your rating title"
        className={`mt-1 ${error ? "border-red-500" : ""}`}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}{" "}
      {/* Show error */}
    </div>
  );
};
