"use client";

import { Button } from "@/components/ui/button";
import { useGetBoardDetails } from "@/features/board/api/use-get-board-details";
import { clientBoardDetails } from "@/recoil/client-atom/atom";
import { motion } from "framer-motion";
import { ChevronRight, Edit, Video } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { LoadingComponent } from "../../_components/loading";
import { ErrorPage } from "@/components/error-page";
import { UserNav } from "../../_components/user-nav";

const Welcome = () => {
  const router = useRouter();
  const params = useParams();
  const { slug } = params;
  const title = Array.isArray(slug) ? slug[0] : slug;
  const setClientBoardDetail = useSetRecoilState(clientBoardDetails);
  const { data, isLoading, error, refetch } = useGetBoardDetails(title);

  useEffect(() => {
    if (data) {
      setClientBoardDetail({
        id: data.id,
        boardTitle: data.boardTitle,
        isActive: data.isActive,
        pageTitle: data.pageTitle,
        pageDescription: data.pageDescription,
        isVideoReview: data.isVideoReview,
        textReviewPageTitle: data.textReviewPageTitle,
        textQuestions: data.textQuestions,
        videoReviewPageTitle: data.videoReviewPageTitle,
        videoQuestions: data.videoQuestions,
        personalPageTitle: data.personalPageTitle,
        thankYouPageTitle: data.thankYouPageTitle,
        thankYouPageMessage: data.thankYouPageMessage,
        userId: data.userId,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      });
    }
  }, [data, setClientBoardDetail]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorPage onRetry={refetch} />;
  }

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8 flex flex-col pt-2">
      <div className=" flex flex-col items-center justify-center w-full mt-4 gap-y-6">
        <UserNav />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center justify-center max-w-3xl mt-12 md:mt-24 lg:mt-36"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-6 py-2.5 text-sm font-medium bg-secondary/80 rounded-full text-secondary-foreground shadow-sm mb-4"
          >
            Share Your Experience
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl text-center font-bold tracking-tight text-foreground mb-6"
          >
            {data?.pageTitle || title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 text-center text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
          >
            {data?.pageDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md"
          >
            <Button
              className="group relative h-14 rounded-xl transition-all hover:bg-primary/90 hover:shadow-lg text-base font-medium px-8 w-full sm:w-auto"
              onClick={() => router.push(`/${title}/text-review`)}
            >
              <div className="flex items-center gap-3">
                <Edit className="w-5 h-5" />
                <span>Write a Review</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>

            {data?.isVideoReview && (
              <Button
                variant="outline"
                className="group relative h-14 rounded-xl transition-all hover:bg-secondary/80 hover:shadow-lg text-base font-medium px-8 w-full sm:w-auto"
                onClick={() => router.push(`/${title}/video-review`)}
              >
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5" />
                  <span>Record a Video</span>
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
      {/* Footer */}
      <footer className="w-full py-4 mt-auto bg-secondary/10 border-t border-neutral-100">
        <div className="flex items-center justify-center">
          <h1 className="text-neutral-500 text-sm">Made with Testify</h1>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
