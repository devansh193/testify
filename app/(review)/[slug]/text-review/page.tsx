"use client";
import { UserTestimonialSchema } from "@/schema";
import type { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { ChevronRight, Dot } from "lucide-react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  testimonialState,
  testimonialTextAtom,
} from "@/recoil/testimonial-atom/atom";
import { useRouter } from "next/navigation";
import { clientBoardDetails } from "@/recoil/client-atom/atom";
import { UserNav } from "../../_components/user-nav";

const testimonialInputSchema = UserTestimonialSchema.pick({
  textReview: true,
  rating: true,
}).partial();

type TestimonialInputSchemaType = z.infer<typeof testimonialInputSchema>;

export default function TestimonialForm() {
  const router = useRouter();
  const [review, setReview] = useRecoilState(testimonialTextAtom);
  const setTestimonialState = useSetRecoilState(testimonialState);
  const boardDetails = useRecoilValue(clientBoardDetails);

  const form = useForm<TestimonialInputSchemaType>({
    resolver: zodResolver(testimonialInputSchema),
    defaultValues: {
      textReview: review || "",
      rating: undefined,
    },
  });

  const onSubmit = (data: TestimonialInputSchemaType) => {
    console.log("Form Submitted!");
    console.log("Submitted Data:", data);
    setTestimonialState((prev) => ({
      ...prev,
      textReview: data.textReview || "",
      rating: data.rating || 0,
    }));
    router.push(`/${boardDetails.boardTitle}/personal`);
  };

  return (
    <div className="min-h-screen w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center gap-y-4 sm:gap-y-6">
        <UserNav />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[95%] md:max-w-2xl mt-8 sm:mt-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl">
            {boardDetails?.textReviewPageTitle}
          </h1>
          {boardDetails?.textQuestions?.length > 0 && (
            <div className="flex flex-col items-start mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
              {boardDetails.videoQuestions.map((question, index) => (
                <div key={index} className="flex items-start w-full">
                  <Dot className="text-gray-700 size-5 sm:size-6 flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base font-normal">{question}</p>
                </div>
              ))}
            </div>
          )}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, (errors) =>
                console.log("Validation Errors:", errors)
              )}
              className="mt-6 sm:mt-8 space-y-4 sm:space-y-6"
            >
              {/* Text Review Input */}
              <FormField
                control={form.control}
                name="textReview"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className="w-full min-h-[100px] sm:min-h-[150px] p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all text-sm sm:text-base"
                        placeholder="Write something..."
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setReview(e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              {/* Rating Select */}
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={(value) => field.onChange(Number(value))}
                        defaultValue={
                          field.value ? field.value.toString() : undefined
                        }
                      >
                        <SelectTrigger className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all text-sm sm:text-base">
                          <SelectValue placeholder="Select a rating" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-300 rounded-lg shadow-lg">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem
                              key={num}
                              value={num.toString()}
                              className="p-2 sm:p-3 hover:bg-gray-100 rounded-md text-sm sm:text-base"
                            >
                              {num} Stars
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              {/* Data Preview */}
              <div className="p-3 sm:p-4 mt-4 sm:mt-6 bg-gray-50 rounded-lg text-left border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Preview:
                </h3>
                <pre className="text-xs sm:text-sm text-gray-700 overflow-x-auto">
                  {JSON.stringify(form.watch(), null, 2)}
                </pre>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <Button className="w-full group relative overflow-hidden h-10 sm:h-12 rounded-xl transition-all hover:bg-primary/90 hover:shadow-lg text-sm sm:text-md font-medium px-4 sm:px-6">
                  <div className="flex items-center gap-2">
                    <span>Next</span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Button>
              </div>
            </form>
          </Form>

          {boardDetails?.isVideoReview && (
            <div className="text-center mt-3 sm:mt-4">
              <div
                className="group cursor-pointer hover:scale-105 transition duration-200"
                onClick={() =>
                  router.push(`/${boardDetails.boardTitle}/video-review`)
                }
              >
                <h1 className="text-xs sm:text-sm font-medium group-hover:underline">
                  Prefer to record a video review instead?
                </h1>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
