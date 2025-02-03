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
import { motion } from "framer-motion";
import { ChevronRight, Dot } from "lucide-react";
import { useRouter } from "next/navigation";
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
    router.push(`/${boardDetails.boardTitle}/personal`);
  };

  return (
    <div className="min-h-screen w-full px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center w-full mt-3 sm:mt-4 md:mt-6 gap-y-3 sm:gap-y-4 md:gap-y-6">
        <UserNav />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl mt-6 sm:mt-8 md:mt-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {boardDetails?.videoReviewPageTitle}
          </h1>
          <VideoRecorder />
          {boardDetails?.videoQuestions?.length > 0 && (
            <div className="flex flex-col items-start mt-2 sm:mt-3 md:mt-4 space-y-1 sm:space-y-1.5 md:space-y-2">
              {boardDetails.videoQuestions.map((question, index) => (
                <p
                  key={index}
                  className="flex text-xs sm:text-sm md:text-base font-normal"
                >
                  <Dot className="text-gray-700 size-4 sm:size-5 md:size-6 mr-1" />{" "}
                  {question}
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
                className="mt-3 sm:mt-4 md:mt-6 space-y-3 sm:space-y-4 md:space-y-6"
              >
                <FormField
                  control={form.control}
                  name="videoUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="w-full p-2 sm:p-2.5 md:p-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring focus:ring-gray-200"
                          placeholder="Enter video URL..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                  <Button className="w-full group relative overflow-hidden h-9 sm:h-10 md:h-12 rounded-xl transition-all hover:bg-primary/90 hover:shadow-lg text-xs sm:text-sm font-medium px-3 sm:px-4 md:px-6">
                    <div className="flex items-center gap-2">
                      <span>Next</span>
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          {boardDetails?.isVideoReview && (
            <div className="text-center mt-2 sm:mt-3 md:mt-4">
              <div
                className="group cursor-pointer hover:scale-105 transition duration-200"
                onClick={() =>
                  router.push(`/${boardDetails.boardTitle}/text-review`)
                }
              >
                <h1 className="text-[10px] sm:text-xs md:text-sm font-medium group-hover:underline">
                  Prefer to write a text review instead?
                </h1>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default UserVideoReview;
