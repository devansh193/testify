"use client";

import { useState } from "react";
import { Lightbulb, Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  descriptionAtom,
  questionsAtom,
  ratingsAtom,
  textReviewAtom,
  titleAtom,
} from "@/recoil/atom";

const ReviewCard = () => {
  const [overallReview, setOverallReview] = useRecoilState(textReviewAtom);
  const [overallRating, setOverallRating] = useRecoilState(ratingsAtom);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const title = useRecoilValue(titleAtom);
  const description = useRecoilValue(descriptionAtom);
  const questions = useRecoilValue(questionsAtom);

  const handleRatingChange = (rating: number) => {
    setOverallRating(rating);
  };

  const calculateProgress = () => {
    let progress = 0;
    if (overallReview.trim().length > 0) progress += 50;
    if (overallRating > 0) progress += 50;
    return progress;
  };

  const handleSubmit = () => {
    setError("");
    if (overallReview.trim().length === 0) {
      setError("Please provide a review.");
      return;
    }
    if (overallRating === 0) {
      setError("Please provide a rating.");
      return;
    }
    setIsSubmitting(true);
    // Simulating API call
    setTimeout(() => {
      console.log("Submitted:", { overallReview, overallRating });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <Card className="w-full mx-auto">
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
          <div className="flex flex-col items-center justify-center mb-1">
            <CardTitle className="text-2xl font-bold mb-1">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 mr-2" />
              <span className="font-semibold">
                Please consider the following questions:
              </span>
            </Label>
            <ul className="list-disc list-inside pl-5 space-y-1">
              {questions.map((question) => (
                <li key={question.id}>{question.text}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <Label htmlFor="overall-review" className="font-semibold text-sm">
              Your Overall Review
            </Label>
            <Textarea
              id="overall-review"
              value={overallReview}
              onChange={(e) => setOverallReview(e.target.value)}
              placeholder="Share your thoughts about the product..."
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <Label className="font-semibold">Overall Rating</Label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 cursor-pointer ${
                    star <= overallRating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                  onClick={() => handleRatingChange(star)}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col space-y-4">
        <Progress value={calculateProgress()} className="w-full" />
        {error && (
          <div className="text-red-500" role="alert">
            {error}
          </div>
        )}
        <Button
          className="w-full"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
