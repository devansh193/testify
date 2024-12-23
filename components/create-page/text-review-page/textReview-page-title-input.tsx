"use client";
import { useRecoilState } from "recoil";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { ratingTitleAtom } from "@/recoil/atom";

export const RatingTitleInput = () => {
  const [title, setTitle] = useRecoilState(ratingTitleAtom);
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
        className="mt-1"
      />
    </div>
  );
};
