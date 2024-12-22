"use client";
import { useRecoilState } from "recoil";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { feedbackDescriptionAtom } from "@/recoil/atom";

export const DescriptionInput = () => {
  const [description, setDescription] = useRecoilState(feedbackDescriptionAtom);
  return (
    <div>
      <Label htmlFor="title" className="text-md font-semibold">
        Description
      </Label>
      <Textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Your product title"
        className="mt-1 min-h-[100px]"
      />
    </div>
  );
};
