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
        boardTitle: data.boardTitle || "",
        pageTitle: data.pageTitle || "",
        pageDescription: data.pageDescription || "",
        isVideoReview: data.isVideoReview || false,
        textReviewPageTitle: data.textReviewPageTitle || "",
        textQuestions: data.textQuestions || [],
        videoReviewPageTitle: data.videoReviewPageTitle || "",
        videoQuestions: data.videoQuestions || [],
        personalPageTitle: data.personalPageTitle || "",
        thankYouPageTitle: data.thankYouPageTitle || "",
        thankYouPageMessage: data.thankYouPageMessage || "",
        userId: data.userId || "",
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-secondary/20">
      <div className="fixed top-0 right-0 left-0 z-10 max-w-5xl mx-auto mt-4 px-4">
        <UserNav />
      </div>

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-6 py-2 text-sm bg-secondary rounded-full text-muted-foreground shadow-sm"
          >
            Share Your Experience
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground"
          >
            {data?.pageTitle || title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {data?.pageDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              className="group relative overflow-hidden h-12 rounded-xl transition-all hover:bg-primary/90 hover:shadow-lg text-sm font-medium px-6"
              onClick={() => router.push(`/${title}/text-review`)}
            >
              <div className="flex items-center gap-2">
                <Edit className="w-4 h-4" />
                <span>Write a Review</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>

            {data?.isVideoReview && (
              <Button
                variant="outline"
                className="group relative overflow-hidden h-12 rounded-xl transition-all hover:bg-secondary hover:shadow-lg text-sm font-medium px-6"
                onClick={() => router.push(`/${title}/video-review`)}
              >
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  <span>Record a Video</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </main>

      <footer className="w-full py-4 bg-background/80 backdrop-blur-sm border-t border-border">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground">
            Trusted by thousands of users worldwide
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Welcome;
