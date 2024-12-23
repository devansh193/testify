"use client";
import PersonalPage from "@/components/create-page/personal-page/personal-page";
import { PersonalSidebar } from "@/components/create-page/personal-page/personal-page-sidebar";
import { useRecoilValue } from "recoil";
import { currentSlideIndexAtom, isVideoReviewEnabledAtom } from "@/recoil/atom";

import { ProductDetailSidebar } from "@/components/create-page/product-details-page/product-detail-sidebar";
import ProductDetails from "@/components/create-page/product-details-page/product-details";
import { TextReviewSidebar } from "@/components/create-page/text-review-page/text-review-sidebar";
import TextReview from "@/components/create-page/text-review-page/text-reviews-page";
import { ThankyouSidebar } from "@/components/create-page/thankyou-page/thankyou-sidebar";
import { Thankyou } from "@/components/create-page/thankyou-page/thankyou-main";
import { VideoReviewSidebar } from "@/components/create-page/video-review-page/video-review-sidebar";
import VideoReview from "@/components/create-page/video-review-page/video-review";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export default function Create() {
  const slide = useRecoilValue(currentSlideIndexAtom);
  const videoReview = useRecoilValue(isVideoReviewEnabledAtom);

  const slides = [
    {
      sidebar: <ProductDetailSidebar />,
      main: <ProductDetails />,
    },
    {
      sidebar: <TextReviewSidebar />,
      main: <TextReview />,
    },
    ...(videoReview
      ? [
          {
            sidebar: <VideoReviewSidebar />,
            main: <VideoReview />,
          },
        ]
      : []),
    {
      sidebar: <PersonalSidebar />,
      main: <PersonalPage />,
    },
    {
      sidebar: <ThankyouSidebar />,
      main: <Thankyou />,
    },
  ];

  return (
    <div className="h-screen flex flex-col lg:flex-row bg-[#F5F5F5]">
      {/* Sidebar */}
      <div className="hidden lg:block lg:w-[450px] bg-transparent p-2">
        {slides[slide]?.sidebar || null}
      </div>
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center bg-white rounded-xl shadow-md sm:m-4">
        <MaxWidthWrapper>{slides[slide]?.main || null}</MaxWidthWrapper>
      </div>
    </div>
  );
}
