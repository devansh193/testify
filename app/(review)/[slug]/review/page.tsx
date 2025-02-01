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
    return (
      <div>
        <LoadingComponent />
      </div>
    );
  }

  if (error) {
    return <ErrorPage onRetry={refetch} />;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-48 py-12 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="fixed top-0 right-0 left-0 z-10 max-w-7xl mx-auto mt-4">
        <UserNav />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-6"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block px-6 py-3 text-sm bg-secondary rounded-full text-muted-foreground shadow-md"
        >
          Share Your Experience
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {data?.pageDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
        >
          <Button
            className="group relative overflow-hidden px-6 py-3 rounded-lg transition-all hover:bg-primary/90 hover:shadow-md"
            size="lg"
            onClick={() => router.push(`/${title}/text-review`)}
          >
            <div className="flex items-center gap-2">
              <Edit className="w-5 h-5" />
              <span className="text-md">Write a Review</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Button>

          {data?.isVideoReview && (
            <Button
              variant="outline"
              className="group relative overflow-hidden px-6 py-3 rounded-lg transition-all hover:bg-secondary hover:shadow-md"
              size="lg"
              onClick={() => router.push(`/${title}/video-review`)}
            >
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5" />
                <span
                  className="text-md
                "
                >
                  Record a Video
                </span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-muted-foreground">
          Trusted by thousands of users worldwide
        </p>
      </motion.div>
    </div>
  );
};
export default Welcome;
