"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, Lightbulb, ThumbsUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Logo from "./Logo";
import { useRecoilValue } from "recoil";
import { descriptionAtom, questionsAtom, titleAtom } from "@/recoil/atom";

export function ClientReviewCardComponent() {
  const [ratings, setRatings] = useState<{ [key: number]: number }>({});
  const [textAnswers, setTextAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const title = useRecoilValue(titleAtom);
  const description = useRecoilValue(descriptionAtom);
  const questions = useRecoilValue(questionsAtom);

  const courseInfo = {
    name: "LearnHub",
    courseName: "Advanced Web Development Masterclass",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Master the latest web technologies and best practices!",
    
  };

  const handleRatingChange = (questionId: number, rating: number) => {
    setRatings((prev) => ({ ...prev, [questionId]: rating }));
  };

  const handleTextChange = (questionId: number, text: string) => {
    setTextAnswers((prev) => ({ ...prev, [questionId]: text }));
  };

  const handleSubmit = () => {
    const reviewData = {
      ratings,
      textAnswers,
    };
    console.log("Submitting review:", reviewData);
    setSubmitted(true);
  };

  const calculateProgress = () => {
    const totalQuestions = questions.length;
    const answeredQuestions =
      Object.keys(ratings).length + Object.keys(textAnswers).length;
    return (answeredQuestions / totalQuestions) * 100;
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <ThumbsUp className="h-16 w-16 mx-auto text-green-500" />
            <CardTitle className="text-2xl font-bold">
              Thank You for Your Review!
            </CardTitle>
            <CardDescription>
              Your feedback helps us improve {title}.
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <div className="flex items-center  justify-center">
          <div className="flex flex-col items-center justify-center">
            <CardTitle className="text-2xl font-bold">
              {title}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="space-y-2">
              <Label className="flex items-center space-x-2">
                <span className="flex items-center justify-between"><Lightbulb className="h-5 w-5 mr-2" />{question.text}</span>
              </Label>
              {question.type === "rating" ? (
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 cursor-pointer ${
                        star <= (ratings[question.id] || 0)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                      onClick={() => handleRatingChange(question.id, star)}
                    />
                  ))}
                </div>
              ) : (
                <Textarea
                  value={textAnswers[question.id] || ""}
                  onChange={(e) =>
                    handleTextChange(question.id, e.target.value)
                  }
                  placeholder="Your answer"
                />
              )}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col space-y-4">
        <Progress value={calculateProgress()} className="w-full" />
        <Button className="w-full" onClick={handleSubmit}>
          Submit Review
        </Button>
      </CardFooter>
    </Card>
  );
}
