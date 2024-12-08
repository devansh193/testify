"use client";
import { useRecoilState } from "recoil";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { titleAtom } from "@/recoil/atom";

export const TitleInput = () => {
  const [title, setTitle] = useRecoilState(titleAtom);
  return (
    <div>
      <Label htmlFor="title" className="text-md">
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
