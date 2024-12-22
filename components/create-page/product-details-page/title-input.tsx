"use client";
import { useRecoilState } from "recoil";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { feedbackPageTitleAtom } from "@/recoil/atom";

export const TitleInput = () => {
  const [title, setTitle] = useRecoilState(feedbackPageTitleAtom);
  return (
    <div>
      <Label htmlFor="title" className="text-md font-semibold">
        Page title
      </Label>
      <Input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Your product title"
        className="mt-1"
      />
    </div>
  );
};
