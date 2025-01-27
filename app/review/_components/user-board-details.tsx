"use client";
import { Button } from "@/components/ui/button";
import { userSlideSelector } from "@/recoil/atom";
import { motion } from "framer-motion";
import { ChevronRight, Edit, Video } from "lucide-react";
import { useSetRecoilState } from "recoil";

interface UserBoardDetailProps {
  title: string;
  description: string;
  isVideoReview: boolean;
}

export const UserBoardDetail = ({
  title,
  description,
  isVideoReview,
}: UserBoardDetailProps) => {
  const setSlide = useSetRecoilState(userSlideSelector);
  return (
    <div className="mt-36 flex flex-col items-center justify-center px-4 bg-gradient-to-b from-background to-secondary/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-6"
      >
        <span className="px-3 py-1 text-sm bg-secondary inline-block rounded-full text-muted-foreground mb-4">
          Share Your Experience
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          {title}
        </h1>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            className="group relative overflow-hidden px-6 py-3 h-auto rounded-xl"
            size="lg"
            onClick={() => setSlide(1)}
          >
            <div className="flex items-center gap-2">
              <Edit className="w-4 h-4" />
              <span>Write a Review</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Button>
          {isVideoReview && (
            <Button
              variant="outline"
              className="group relative overflow-hidden px-6 py-3 h-auto rounded-xl"
              size="lg"
              onClick={() => setSlide(2)}
            >
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                <span>Record a Video</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="text-sm text-muted-foreground">
          Trusted by thousands of users worldwide
        </p>
      </motion.div>
    </div>
  );
};
