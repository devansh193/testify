"use client";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { createBoard } from "@/action/board";
import {
  feedbackBoardTitleAtom,
  feedbackPageTitleAtom,
  feedbackDescriptionAtom,
  isVideoReviewEnabledAtom,
  ratingTitleAtom,
  feedbackQuestionsAtom,
  videoReviewTitleAtom,
  videoReviewQuestionsAtom,
  personalFeedbackTitleAtom,
  thankyouTitleAtom,
  thankyouDescriptionAtom,
  slideSelector,
  logoUrlAtom,
} from "@/recoil/atom";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

export const SlideButton = () => {
  const { data: session } = useSession();
  const currentSlide = useRecoilValue(slideSelector);
  const videoReview = useRecoilValue(isVideoReviewEnabledAtom);
  const totalSlides = videoReview ? 5 : 4;
  const boardTitle = useRecoilValue(feedbackBoardTitleAtom);
  const pageTitle = useRecoilValue(feedbackPageTitleAtom);
  const pageDescription = useRecoilValue(feedbackDescriptionAtom);
  const isVideoReview = useRecoilValue(isVideoReviewEnabledAtom);
  const textReviewPageTitle = useRecoilValue(ratingTitleAtom);
  const textQuestions = useRecoilValue(feedbackQuestionsAtom);
  const videoReviewPageTitle = useRecoilValue(videoReviewTitleAtom);
  const videoQuestions = useRecoilValue(videoReviewQuestionsAtom);
  const personalPageTitle = useRecoilValue(personalFeedbackTitleAtom);
  const thankYouPageTitle = useRecoilValue(thankyouTitleAtom);
  const thankYouPageMessage = useRecoilValue(thankyouDescriptionAtom);
  const thankYouPageImage = useRecoilValue(logoUrlAtom);
  const setSlide = useSetRecoilState(slideSelector);
  const userId = session?.user?.id || "";
  const handleNextClick = () => {
    setSlide((slide) => slide + 1);
  };

  const handlePrevClick = () => {
    setSlide((slide) => slide - 1);
  };

  const handleSubmitClick = async () => {
    console.log("Before try-catch");
    try {
      const payload = {
        boardTitle,
        pageTitle,
        pageDescription,
        isVideoReview,
        textReviewPageTitle,
        textQuestions,
        videoReviewPageTitle,
        videoQuestions,
        personalPageTitle,
        thankYouPageTitle,
        thankYouPageMessage,
        thankYouPageImage,
        userId,
      };
      console.log("Before action");
      const response = await createBoard(payload);
      console.log("After action");
      console.log(response.message, "Chud gaya");
      toast.message(`${response.message} ${"CHUD GAYA CODE"}`);
    } catch (_error) {
      console.log(_error);
    }
  };

  return (
    <div className="flex items-center justify-between gap-x-2">
      <Button
        onClick={handlePrevClick}
        disabled={currentSlide === 0}
        className="w-full"
      >
        <ArrowLeft className="size-5 mr-2" />
        Previous
      </Button>
      {currentSlide === totalSlides - 1 ? (
        <Button onClick={handleSubmitClick} className="w-full">
          Submit
        </Button>
      ) : (
        <Button onClick={handleNextClick} className="w-full">
          Next
          <ArrowRight className="size-5 ml-2" />
        </Button>
      )}
    </div>
  );
};
