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
    <div className="lg:mt-36 flex flex-col items-center justify-center px-4 bg-gradient-to-b from-background to-secondary/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-8"
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block px-4 py-2 text-sm bg-secondary rounded-full text-muted-foreground shadow-sm"
        >
          Share Your Experience
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button
            className="group relative overflow-hidden px-8 py-3 h-auto rounded-xl transition-all hover:bg-primary/90 hover:shadow-lg"
            size="lg"
            onClick={() => setSlide(1)}
          >
            <div className="flex items-center gap-2">
              <Edit className="w-5 h-5" />
              <span className="text-lg">Write a Review</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Button>

          {isVideoReview && (
            <Button
              variant="outline"
              className="group relative overflow-hidden px-8 py-3 h-auto rounded-xl transition-all hover:bg-secondary hover:shadow-lg"
              size="lg"
              onClick={() => setSlide(2)}
            >
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5" />
                <span className="text-lg">Record a Video</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>
          )}
        </motion.div>
      </motion.div>

      {/* Footer Text */}
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
