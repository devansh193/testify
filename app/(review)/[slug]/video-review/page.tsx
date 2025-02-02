"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { clientBoardDetails } from "@/recoil/client-atom/atom";
import { testimonialState } from "@/recoil/testimonial-atom/atom";
import { UserTestimonialSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
// import VideoRecorder from "@/components/video-recorder";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { z } from "zod";
import { UserNav } from "../../_components/user-nav";
import VideoRecorder from "@/components/video-recorder";

const videoTestimonialSchema = UserTestimonialSchema.pick({
  videoUrl: true,
}).partial();

type VideoTestimonialSchemaType = z.infer<typeof videoTestimonialSchema>;

const UserVideoReview = () => {
  const router = useRouter();
  const boardDetails = useRecoilValue(clientBoardDetails);
  const setTestimonialState = useSetRecoilState(testimonialState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const form = useForm<VideoTestimonialSchemaType>({
    resolver: zodResolver(videoTestimonialSchema),
    defaultValues: {
      videoUrl: "",
    },
  });

  const onSubmit = (data: VideoTestimonialSchemaType) => {
    console.log("Video form submitted:", data);
    setTestimonialState((prev) => ({
      ...prev,
      videoUrl: data.videoUrl || "",
    }));
  };

  if (!isClient) return null; // Prevent hydration errors by delaying rendering on the client

  return (
    <div className="h-full w-full flex flex-col p-4 md:p-8 pt-10 mt-10">
      <div className="fixed top-0 right-0 left-0 z-10 max-w-5xl mx-auto mt-4">
        <UserNav />
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Display video questions dynamically */}
          <div className="flex items-center justify-center sm:mt-12 mt-6">
            <div className="w-ful flex flex-col">
              {/* Video Section */}
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium text-foreground mb-6">
                  {boardDetails?.videoReviewPageTitle}
                </h1>
                {/* <div className="bg-[#d1d0d0] w-full h-[250px] sm:h-[300px] my-5 rounded-xl p-4 ring-8 ring-[#F5F5F5] flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <button className="bg-red-500 p-2 rounded-full ring-4 ring-red-400 transition-transform duration-150 hover:scale-110">
                      <Video className="text-black" />
                    </button>
                  </div>
                </div> */}
                <VideoRecorder />
                {boardDetails?.videoQuestions?.length > 0 && (
                  <div className="flex flex-col items-start mt-4 space-y-2">
                    {boardDetails.videoQuestions.map((question, index) => (
                      <p
                        key={index}
                        className="flex text-sm md:text-base font-normal"
                      >
                        <Dot className="text-gray-700 size-6 mr-1" /> {question}
                      </p>
                    ))}
                  </div>
                )}
                <div className="w-full">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit, (errors) =>
                        console.log("Validation Errors:", errors)
                      )}
                      className="mt-6 space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="videoUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-200"
                                placeholder="Enter video URL..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Submit Button */}
                      <div className="flex flex-col items-center gap-4">
                        <Button
                          type="submit"
                          className="w-full py-3 rounded-lg"
                        >
                          Next
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
                {boardDetails?.isVideoReview && (
                  <div className="text-center mt-4">
                    <p className="text-gray-500 mb-2">or</p>
                    <div
                      className="group cursor-pointer hover:scale-105 transition duration-200"
                      onClick={() =>
                        router.push(`/${boardDetails.boardTitle}/text-review`)
                      }
                    >
                      <h1 className="text-sm font-medium group-hover:underline">
                        Write a <span className="font-semibold">review</span>
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserVideoReview;
