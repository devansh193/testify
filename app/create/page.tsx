"use client";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { currentSlideIndexAtom, isVideoReviewEnabledAtom } from "@/recoil/atom";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import PersonalPage from "@/components/create-page/personal-page/personal-page";
import { PersonalSidebar } from "@/components/create-page/personal-page/personal-page-sidebar";
import { BoardDetailSidebar } from "@/components/create-page/board-details-page/board-detail-sidebar";
import BoardDetails from "@/components/create-page/board-details-page/board-details";
import { TextReviewSidebar } from "@/components/create-page/text-review-page/text-review-sidebar";
import TextReview from "@/components/create-page/text-review-page/text-reviews-page";
import { ThankyouSidebar } from "@/components/create-page/thankyou-page/thankyou-sidebar";
import { Thankyou } from "@/components/create-page/thankyou-page/thankyou-main";
import { VideoReviewSidebar } from "@/components/create-page/video-review-page/video-review-sidebar";
import VideoReview from "@/components/create-page/video-review-page/video-review";

export default function Create() {
  const slide = useRecoilValue(currentSlideIndexAtom);
  const videoReview = useRecoilValue(isVideoReviewEnabledAtom);
  const [isOpen, setIsOpen] = useState(false);

  const slides = [
    {
      sidebar: <BoardDetailSidebar />,
      main: <BoardDetails />,
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
      {/* Sheet for small screens */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden fixed mt-6 top-4 ml-4 z-50"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="w-full sm:w-full md:w-[400px]">
          {slides[slide]?.sidebar || null}
        </SheetContent>
      </Sheet>
      <div className="hidden lg:block bg-transparent p-2">
        {slides[slide]?.sidebar || null}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center bg-white rounded-xl shadow-md sm:m-4">
        <MaxWidthWrapper>{slides[slide]?.main || null}</MaxWidthWrapper>
      </div>
    </div>
  );
}
