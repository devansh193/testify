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
import { Dot, Star } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function TextReview() {
  const questions = useRecoilValue(questionsAtom);
  const title = useRecoilValue(ratingTitleAtom);

  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-[600px]">
        <CardHeader className="gap-y-2">
          <CardTitle className="text-3xl font-sans font-light">
            {title}
          </CardTitle>
        </CardHeader>
        <CardDescription className="ml-4">
          {questions?.map((question) => (
            <p key={question} className="flex text-sm font-normal font-sans">
              <Dot className="text-gray-700" /> {question}
            </p>
          ))}
        </CardDescription>
        <CardFooter className="flex items-start justify-start gap-x-4">
          <div className="flex gap-1 md:pt-4">
            {[...Array(5)].map((_, index) => (
              <div key={index}>
                <Star className="text-gray-500" fill="#6B7280" />
              </div>
            ))}
          </div>
        </CardFooter>
        <CardContent>
          <Textarea placeholder="Write your heart out." />
        </CardContent>
        <CardFooter>
          <Button className="h-[45px] w-full font-sans">Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
