"use client";
import PersonalPage from "@/components/create-page/personal-page/personal-page";
import { PersonalSidebar } from "@/components/create-page/personal-page/personal-page-sidebar";
import { useRecoilValue } from "recoil";
import { slideAtom } from "@/recoil/atom";
import { ProductDetailSidebar } from "@/components/create-page/product-details-page/product-detail-sidebar";
import ProductDetails from "@/components/create-page/product-details-page/product-details";
import { TextReviewSidebar } from "@/components/create-page/text-review-page/text-review-sidebar";
import TextReview from "@/components/create-page/text-review-page/text-reviews";
import { ThankyouSidebar } from "@/components/create-page/thankyou-page/thankyou-sidebar";
import { Thankyou } from "@/components/create-page/thankyou-page/thankyou-main";
import { VideoReviewSidebar } from "@/components/create-page/video-review-page/video-revew-sidebar";
import VideoReview from "@/components/create-page/video-review-page/video-review";

export default function Create() {
  const slide = useRecoilValue(slideAtom);

  // Slide components mapping
  const slides = [
    {
      sidebar: <ProductDetailSidebar />,
      main: <ProductDetails />,
    },
    {
      sidebar: <TextReviewSidebar />,
      main: <TextReview />,
    },
    {
      sidebar: <VideoReviewSidebar />,
      main: <VideoReview />,
    },
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
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="hidden lg:block">{slides[slide]?.sidebar || null}</div>
      {/* Main Content */}
      <div className="flex-1 items-center justify-center h-full">
        {slides[slide]?.main || null}
      </div>
    </div>
  );
}
