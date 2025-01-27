import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, Loader } from "lucide-react";
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
} from "@/recoil/atom";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useCreateBoard } from "@/features/board/api/use-create-board";

export const SlideButton = () => {
  const { mutate: createBoard } = useCreateBoard();
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
  const setSlide = useSetRecoilState(slideSelector);

  const userId = session?.user?.id || "";
  const handleNextClick = () => {
    setSlide((slide) => slide + 1);
  };

  const handlePrevClick = () => {
    setSlide((slide) => slide - 1);
  };

  const handleSubmitClick = () => {
    const toastId = toast.message("Creating board...", {
      icon: <Loader className="animate-spin" />,
    });

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
      userId,
    };

    createBoard(payload, {
      onSuccess: (data) => {
        if (data.code === 409) {
          toast.error(
            "Board already exists. Please choose a different title.",
            {
              icon: "",
              id: toastId,
            }
          );
        } else {
          toast.success(data.message || "Board created successfully!", {
            icon: "",
            id: toastId,
          });
        }
      },
      onError: (error) => {
        toast.error(error.message || "Something went wrong.", {
          icon: "",
          id: toastId,
        });
      },
    });
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
