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
import { questionsAtom, ratingTitleAtom } from "@/recoil/atom";
import { Dot } from "lucide-react";
import TestifyLogo from "@/components/Logo";
import { Button } from "@/components/ui/button";

export default function VideoReview() {
  const questions = useRecoilValue(questionsAtom);
  const title = useRecoilValue(ratingTitleAtom);

  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-[600px]">
        <CardHeader className="gap-y-2">
          <CardTitle>
            <TestifyLogo />
          </CardTitle>
          <CardTitle className="text-5xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>hi there</CardContent>
        <CardDescription className="ml-4">
          {questions?.map((question) => (
            <p key={question} className="flex text-lg font-normal">
              <Dot className="text-black" /> {question}
            </p>
          ))}
        </CardDescription>
        <CardFooter className="flex flex-col items-center justify-center gap-y-2 pt-4">
          <Button className="w-full h-[45px] text-md">Record video</Button>
          <Button className="w-full  h-[45px] text-md" variant={"outline"}>
            Upload file
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
