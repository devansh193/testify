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
import { Dot } from "lucide-react";
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
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="fixed top-0 right-0 left-0 z-10 max-w-5xl mx-auto mt-4">
        <UserNav />
      </div>
      <div className="mt-24 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-xl p-6 md:p-8 text-start"
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium text-foreground mb-6">
            {boardDetails.textReviewPageTitle}
          </h1>
          <div className="mt-4 space-y-4 text-left">
            {boardDetails?.textQuestions.map((question) => (
              <p
                key={question}
                className="flex items-start text-md md:text-base text-gray-700"
              >
                <Dot className="text-gray-700 size-5 mr-2" /> {question}
              </p>
            ))}
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, (errors) =>
                console.log("Validation Errors:", errors)
              )}
              className="mt-8 space-y-6"
            >
              {/* Text Review Input */}
              <FormField
                control={form.control}
                name="textReview"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className="w-full min-h-[150px] p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all"
                        placeholder="Write something..."
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setReview(e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
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
                        <SelectTrigger className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all">
                          <SelectValue placeholder="Select a rating" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-300 rounded-lg shadow-lg">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem
                              key={num}
                              value={num.toString()}
                              className="p-3 hover:bg-gray-100 rounded-md"
                            >
                              {num} Stars
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {/* Data Preview */}
              <div className="p-4 mt-6 bg-gray-50 rounded-lg text-left border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">Preview:</h3>
                <pre className="text-sm text-gray-700">
                  {JSON.stringify(form.watch(), null, 2)}
                </pre>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center gap-4">
                <Button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium shadow-md hover:shadow-lg transition-all"
                >
                  Next
                </Button>
              </div>
            </form>
          </Form>

          {/* Video Review Option */}
          {boardDetails?.isVideoReview && (
            <div className="text-center mt-4">
              <p className="text-gray-500 mb-2">or</p>
              <div
                className="group cursor-pointer hover:scale-105 transition duration-200"
                onClick={() =>
                  router.push(`/${boardDetails.boardTitle}/video-review`)
                }
              >
                <h1 className="text-sm font-medium group-hover:underline">
                  Record a <span className="font-semibold">video</span>
                </h1>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
