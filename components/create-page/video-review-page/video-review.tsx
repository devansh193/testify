"use client";
import { useRecoilValue } from "recoil";
import { boardAtom, questionsAtom, videoTitle } from "@/recoil/atom";
import { ArrowLeft, ArrowRight, Dot, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VideoReview() {
  const board = useRecoilValue(boardAtom);
  const questions = useRecoilValue(questionsAtom);
  const title = useRecoilValue(videoTitle);

  return (
    <div className="h-full flex flex-col p-4 md:p-8">
      {/* Navbar */}
      <div className="h-14 w-full flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-sans font-medium">{board}</h1>
        <div className="flex items-center justify-center gap-x-2">
          <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center md:mt-24">
        <div className="w-full max-w-[600px] flex flex-col">
          {/* Title Section */}
          <div className="flex flex-col items-start">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-sans">
              {title}
            </h1>
            <div className="bg-[#d1d0d0] w-full max-w-[600px] h-[300px] my-5 rounded-xl p-4 ring-8 ring-[#F5F5F5] flex items-center justify-center">
              <div className="w-full h-full flex items-end justify-center">
                <h1 className="bg-red-500 p-2 rounded-full ring-4 ring-red-400 transform transition-transform duration-150 hover:scale-110">
                  <Video />
                </h1>
              </div>
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
            <Button className="h-[45px] w-full py-2 px-4 rounded-lg">
              Upload
            </Button>
            <p className="">or</p>
            <div className="group cursor-pointer hover:scale-110 transition duration-200">
              <h1 className="text-md font-sans">
                Write a <span className="font-semibold">review</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
