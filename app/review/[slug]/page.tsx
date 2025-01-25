"use client";
import { useGetBoardDetails } from "@/features/board/api/use-get-board-details";
import { useParams } from "next/navigation";
import { UserBoardDetail } from "../_components/user-board-details";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userCurrentSlideAtom, userSlideCount } from "@/recoil/atom";
import { UserTextReview } from "../_components/user-text-review";
import { UserVideoReview } from "../_components/user-video-review";
import { UserPersonal } from "../_components/user-personal";
import { UserThankyou } from "../_components/user-thankyou";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const Review = () => {
  const params = useParams();
  const { slug } = params;
  const title = Array.isArray(slug) ? slug[0] : slug;
  const { data, isLoading, isError, error } = useGetBoardDetails(title);
  const totalSlides = data?.isVideoReview ? 5 : 4;
  const setUserSlideCount = useSetRecoilState(userSlideCount);
  setUserSlideCount(totalSlides);
  const currentSlide = useRecoilValue(userCurrentSlideAtom);

  if (isLoading) {
    return (
      <div className="flex flex-col p-4 md:p-8">
        <div className="flex items-center justify-center mt-24 sm:mt-48">
          <div className="max-w-[600px] flex flex-col items-start justify-start gap-y-4 sm:gap-y-2 w-full">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-20 w-full mt-2" />
            <div className="space-y-2 sm:space-y-0 sm:space-x-4 mt-4 w-full">
              <Button size="lg" className="h-[45px] w-full sm:w-auto" disabled>
                <Skeleton className="h-4 w-4 mr-2 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </Button>
              <Button
                size="lg"
                className="h-[45px] w-full sm:w-auto mt-2 sm:mt-0"
                variant="outline"
                disabled
              >
                <Skeleton className="h-4 w-4 mr-2 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {currentSlide === 0 ? (
        <UserBoardDetail
          title={data?.boardTitle || ""}
          description={data?.pageDescription || ""}
          isVideoReview={data?.isVideoReview || true}
        />
      ) : currentSlide === 1 ? (
        <UserTextReview
          title={data?.textReviewPageTitle || ""}
          questions={data?.textQuestions || [""]}
        />
      ) : currentSlide === 2 ? (
        <UserVideoReview
          title={data?.videoReviewPageTitle || ""}
          questions={data?.videoQuestions || []}
        />
      ) : currentSlide === 3 ? (
        <UserPersonal title={data?.personalPageTitle || ""} />
      ) : currentSlide === 4 ? (
        <UserThankyou
          title={data?.thankYouPageTitle || ""}
          message={data?.thankYouPageMessage || ""}
        />
      ) : (
        <div>Whoops a daisy! We ran into an error.</div>
      )}
    </div>
  );
};
export default Review;
