"use client";
import { useRecoilState } from "recoil";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { feedbackBoardTitleAtom } from "@/recoil/atom";

export const BoardInput = () => {
  const [boardName, setBoardName] = useRecoilState(feedbackBoardTitleAtom);

  return (
    <div>
      <Label htmlFor="title" className="text-md font-semibold">
        Board name
      </Label>
      <Input
        id="title"
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
        placeholder="Your product title"
        className="mt-1"
      />
    </div>
  );
};
