"use client";
import { useRecoilState } from "recoil";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { descriptionAtom } from "@/recoil/atom";

export const DescriptionInput = () => {
  const [description, setDescription] = useRecoilState(descriptionAtom);
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
        className="mt-1"
      />
    </div>
  );
};
