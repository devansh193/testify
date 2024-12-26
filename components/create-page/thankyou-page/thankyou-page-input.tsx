"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { thankyouTitleAtom, thankyouDescriptionAtom } from "@/recoil/atom";
import {
  thankyouTitleErrorSelector,
  thankyouDescriptionErrorSelector,
} from "@/recoil/selectors";

export const ThankyouInput = () => {
  const [title, setTitle] = useRecoilState(thankyouTitleAtom);
  const [message, setMessage] = useRecoilState(thankyouDescriptionAtom);
  const titleError = useRecoilValue(thankyouTitleErrorSelector);
  const messageError = useRecoilValue(thankyouDescriptionErrorSelector);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title" className="text-md font-semibold">
          Page Title
        </Label>
        <Input
          type="text"
          id="title"
          placeholder="Page title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`mt-1 ${titleError ? "border-red-500" : ""}`} // Apply red border if error exists
        />
        {titleError && (
          <span className="text-red-500 text-sm mt-1">{titleError}</span>
        )}{" "}
        {/* Display error */}
      </div>

      <div>
        <Label htmlFor="message" className="text-md font-semibold">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`mt-1 min-h-[100px] ${
            messageError ? "border-red-500" : ""
          }`} // Apply red border if error exists
        />
        {messageError && (
          <span className="text-red-500 text-sm mt-1">{messageError}</span>
        )}{" "}
        {/* Display error */}
      </div>
    </div>
  );
};
