"use client";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { feedbackBoardTitleErrorSelector } from "@/recoil/selectors";
import { feedbackBoardTitleAtom } from "@/recoil/atom";

export const BoardInput = () => {
  const [boardTitle, setBoardTitle] = useRecoilState(feedbackBoardTitleAtom);
  const error = useRecoilValue(feedbackBoardTitleErrorSelector);

  return (
    <div>
      <Label htmlFor="title" className="text-md font-semibold">
        Board Title
      </Label>
      <Input
        id="title"
        value={boardTitle}
        onChange={(e) => setBoardTitle(e.target.value)}
        placeholder="Enter board title"
        className={`mt-1`}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}{" "}
    </div>
  );
};
