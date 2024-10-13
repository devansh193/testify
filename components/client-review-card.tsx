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
import { useRecoilState, useRecoilValue } from "recoil";
import {
  descriptionAtom,
  questionsAtom,
  ratingsAtom,
  textAnswersAtom,
  titleAtom,
} from "@/recoil/atom";

export function ClientReviewCardComponent() {
  const [ratings, setRatings] = useRecoilState(ratingsAtom);
  const [textAnswers, setTextAnswers] = useRecoilState(textAnswersAtom);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const title = useRecoilValue(titleAtom);
  const description = useRecoilValue(descriptionAtom);
  const questions = useRecoilValue(questionsAtom);

  const handleRatingChange = (questionId: number, rating: number) => {
    setRatings((prevRatings) => {
      const existingRatingIndex = prevRatings.findIndex(
        (item) => item.questionId === questionId
      );

      if (existingRatingIndex !== -1) {
        const updatedRatings = [...prevRatings];
        updatedRatings[existingRatingIndex].rating = rating;
        return updatedRatings;
      } else {
        return [...prevRatings, { questionId, rating }];
      }
    });
    console.log(rating);
  };

  const handleTextChange = (questionId: number, answer: string) => {
    setTextAnswers((prevTextAnswers) => {
      const existingTextIndex = prevTextAnswers.findIndex(
        (item) => item.questionId === questionId
      );

      if (existingTextIndex !== -1) {
        const updatedTextAnswers = prevTextAnswers.map((item, index) =>
          index === existingTextIndex
            ? { ...item, answer } // Return a new object with the updated answer
            : item
        );
        return updatedTextAnswers;
      } else {
        // Add a new text answer for the new questionId
        return [...prevTextAnswers, { questionId, answer }];
      }
    });
    console.log(answer);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    const reviewData = {
      title,
      ratings,
      textAnswers,
    };

    try {
    } catch (err) {
      setError(
        "An error occurred while submitting your review. Please try again."
      );
      console.error("Error submitting review:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateProgress = () => {
    const totalQuestions = questions.length;
    const answeredQuestions =
      Object.keys(ratings).length + Object.keys(textAnswers).length;
    return (answeredQuestions / totalQuestions) * 100;
  };

  if (submitted) {
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
          {questions.map((question) => (
            <div key={question.id} className="space-y-2">
              <Label className="flex items-center space-x-2">
                <span className="flex items-center justify-between">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  {question.text}
                </span>
              </Label>
              {question.type === "rating" ? (
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const ratingForQuestion =
                      ratings.find((item) => item.questionId === question.id)
                        ?.rating || 0;
                    return (
                      <Star
                        key={star}
                        className={`h-6 w-6 cursor-pointer ${
                          star <= ratingForQuestion
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                        onClick={() => handleRatingChange(question.id, star)}
                      />
                    );
                  })}
                </div>
              ) : (
                <Textarea
                  value={
                    textAnswers.find((item) => item.questionId === question.id)
                      ?.answer || ""
                  }
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
        {error && <div className="text-red-500">{error}</div>}
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
}
