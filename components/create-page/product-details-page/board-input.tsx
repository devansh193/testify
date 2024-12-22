"use client";
import { useRecoilState } from "recoil";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { boardAtom } from "@/recoil/atom";

export const BoardInput = () => {
  const [boardName, setBoard] = useRecoilState(boardAtom);
  return (
    <div>
      <Label htmlFor="title" className="text-md font-semibold">
        Board name
      </Label>
      <Input
        id="title"
        value={boardName}
        onChange={(e) => setBoard(e.target.value)}
        placeholder="Your product title"
        className="mt-1"
      />
    </div>
  );
};
