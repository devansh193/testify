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
import { ratingTitleAtom, videoQuestionsAtom } from "@/recoil/atom";
import { Dot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VideoReview() {
  const questions = useRecoilValue(videoQuestionsAtom);
  const title = useRecoilValue(ratingTitleAtom);

  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-[600px]">
        <CardContent className="flex items-center justify-center">
          <div className="h-[250px] w-full bg-gray-100 flex items-center justify-center rounded-lg mt-6">
            hi there
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-3xl font-sans font-light">
            {title}
          </CardTitle>
        </CardHeader>
        <CardDescription className="ml-4">
          {questions?.map((question) => (
            <p key={question} className="flex text-sm font-sans font-normal">
              <Dot className="text-gray-700" /> {question}
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
