"use client";
import { useRecoilValue } from "recoil";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { questionsAtom, ratingTitleAtom, starAtom } from "@/recoil/atom";
import { Dot } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import TestifyLogo from "@/components/Logo";

export default function TextReview() {
  const questions = useRecoilValue(questionsAtom);
  const star = useRecoilValue(starAtom);
  const emojis = ["😠", "🙁", "😐", "😊", "😄"];
  const title = useRecoilValue(ratingTitleAtom);

  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-[750px]">
        <CardHeader className="gap-y-2">
          <CardTitle>
            <TestifyLogo />
          </CardTitle>
          <CardTitle className="text-5xl">{title}</CardTitle>
        </CardHeader>
        <CardDescription className="ml-4">
          {questions?.map((question) => (
            <p key={question} className="flex text-lg font-normal">
              <Dot className="text-black" /> {question}
            </p>
          ))}
        </CardDescription>
        <CardFooter className="flex items-center justify-center gap-x-4">
          {star && (
            <div className="flex justify-center gap-x-4 py-4">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  className="text-4xl hover:scale-125 transition-transform"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
        </CardFooter>
        <CardContent>
          <Textarea placeholder="Write your heart out." />
        </CardContent>
      </Card>
    </div>
  );
}
