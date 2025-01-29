"use client";
import { Button } from "@/components/ui/button";
// import VideoRecorder from "@/components/video-recorder";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";

interface UserVideoReviewProps {
  title: string;
  questions: string[];
  onChange: (slide: number) => void;
}

export const UserVideoReview = ({
  title,
  questions,
  onChange,
}: UserVideoReviewProps) => {
  return (
    <div className="h-full flex flex-col p-4 md:p-8 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=""
      >
        <div className="flex items-center justify-center sm:mt-20 mt-4">
          <div className="w-full max-w-[600px] flex flex-col">
            {/* Video Section */}
            <div className="flex flex-col items-start">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-sans">
                {title}
              </h1>
              <div className="bg-[#d1d0d0] w-full max-w-[600px] h-[300px] my-5 rounded-xl p-4 ring-8 ring-[#F5F5F5] flex items-center justify-center">
                {/* <div className="w-full h-full flex items-end justify-center">
                <h1 className="bg-red-500 p-2 rounded-full ring-4 ring-red-400 transform transition-transform duration-150 hover:scale-110">
                  <Video className="text-black" />
                </h1>
              </div> */}
                {/* <VideoRecorder /> */}
              </div>

              <div className="flex flex-col items-start mt-4 space-y-2">
                {questions?.map((question) => (
                  <p
                    key={question}
                    className="flex text-sm md:text-base font-normal font-sans"
                  >
                    <Dot className="text-gray-700 size-6 mr-1" /> {question}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4 gap-y-2">
              <Button
                className="h-[45px] w-full py-2 px-4 rounded-lg"
                onClick={() => onChange(3)}
              >
                Upload
              </Button>
              <p className="">or</p>
              <div
                className="group cursor-pointer hover:scale-110 transition duration-200"
                onClick={() => onChange(1)}
              >
                <h1 className="text-md font-sans">
                  Write a <span className="font-semibold">review</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
