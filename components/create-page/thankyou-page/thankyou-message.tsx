"use client";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

export const ThankyouInput = () => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title" className="text-md font-semibold">
          Message
        </Label>
        <Textarea
          id="title"
          placeholder="Your product title"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="title" className="text-md font-semibold">
          Image(optional)
        </Label>
        <Input
          type="file"
          id="title"
          placeholder="Your product title"
          className="mt-1"
        />
      </div>
    </div>
  );
};
