"use client";

import { useState } from "react";
import {
  Lightbulb,
  Loader,
  Star,
  ThumbsUp,
  User,
  Mail,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  descriptionAtom,
  emailAtom,
  imageAtom,
  nameAtom,
  productAtom,
  questionsAtom,
  ratingsAtom,
  textReviewAtom,
  titleAtom,
} from "@/recoil/atom";
import { createTestimonial } from "@/action/testimonial";
import { toast } from "sonner";

export default function ReviewCard() {
  const [name, setName] = useRecoilState(nameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [image, setImage] = useRecoilState(imageAtom);
  const [overallReview, setOverallReview] = useRecoilState(textReviewAtom);
  const [overallRating, setOverallRating] = useRecoilState(ratingsAtom);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const title = useRecoilValue(titleAtom);
  const product = useRecoilValue(productAtom);
  const description = useRecoilValue(descriptionAtom);
  const questions = useRecoilValue(questionsAtom);

  const handleRatingChange = (rating: number) => {
    setOverallRating(rating);
  };

  const calculateProgress = () => {
    let progress = 0;
    if (name.trim().length > 0) progress += 20;
    if (email.trim().length > 0) progress += 20;
    if (overallReview.trim().length > 0) progress += 30;
    if (overallRating > 0) progress += 30;
    return progress;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim()) {
      setError("Please provide your name and email.");
      return;
    }
    if (overallReview.trim().length === 0) {
      setError("Please provide a review.");
      return;
    }
    if (overallRating === 0) {
      setError("Please provide a rating.");
      return;
    }

    const productId = product?.id;
    const data = {
      name,
      email,
      textReview: overallReview,
      rating: overallRating,
      productId: productId || "",
    };

    setIsSubmitting(true);
    const toastId = toast("Submitting review...", {
      icon: <Loader className="animate-spin" />,
    });

    try {
      const response = await createTestimonial(data);
      if (response.success) {
        toast.success(response.message, {
          id: toastId,
          icon: "",
        });
        setIsSubmitted(true);
      } else {
        toast.error(response.message, {
          id: toastId,
          icon: "",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Internal server error.", {
        id: toastId,
        icon: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row p-4 gap-4">
      {/* <div className="w-full md:w-1/3">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
        </Card>
      </div> */}
      <div className="w-full md:w-2/3">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Your Review</CardTitle>
            <CardDescription>We value your opinion on {title}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center">
                    <User className="w-4 h-4 mr-2" /> Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" /> Email
                  </Label>
                  <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="image" className="flex items-center">
                  <ImageIcon className="w-4 h-4 mr-2" /> Profile Image
                  (optional)
                </Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                />
              </div>
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
                <Label
                  htmlFor="overall-review"
                  className="font-semibold text-sm"
                >
                  Your Overall Review
                </Label>
                <Textarea
                  id="overall-review"
                  value={overallReview}
                  onChange={(e) => setOverallReview(e.target.value)}
                  placeholder="Share your thoughts about the product..."
                  rows={4}
                  required
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
              {image && (
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      src={URL.createObjectURL(image)}
                      alt="Profile"
                    />
                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-500">
                    Profile image preview
                  </span>
                </div>
              )}
              <Progress value={calculateProgress()} className="w-full" />
              {error && (
                <div className="text-red-500 font-semibold" role="alert">
                  {error}
                </div>
              )}
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin mr-2" /> Submitting...
                  </>
                ) : (
                  "Submit Review"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
