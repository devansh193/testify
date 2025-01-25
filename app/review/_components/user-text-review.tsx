import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { userSlideSelector } from "@/recoil/atom";
import { Dot } from "lucide-react";
import { useSetRecoilState } from "recoil";

interface UserTextReview {
  title: string;
  questions: string[];
}

export const UserTextReview = ({ title, questions }: UserTextReview) => {
  const setSlide = useSetRecoilState(userSlideSelector);
  return (
    <div className="h-full flex flex-col p-4 md:p-8 gap-y-4">
      <div className="flex items-center justify-center pt-36">
        <div className="w-full max-w-[600px] flex flex-col">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-sans">
              {title}
            </h1>
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
          <div className="flex flex-col items-center mt-6 gap-y-2">
            <Textarea
              className="w-full min-h-[100px]"
              placeholder="Write something..."
            />
            <Button
              className="h-[45px] w-full py-2 px-4 rounded-lg"
              onClick={() => setSlide((slide) => slide + 2)}
            >
              Next
            </Button>
            <p className="">or</p>
            <div
              className="group cursor-pointer hover:scale-110 transition duration-200"
              onClick={() => setSlide((slide) => slide + 1)}
            >
              <h1 className="text-md font-sans">
                Record a <span className="font-semibold">video</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
