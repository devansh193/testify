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
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  testimonialState,
  testimonialTextAtom,
} from "@/recoil/testimonial-atom/atom";

const testimonialInputSchema = UserTestimonialSchema.pick({
  textReview: true,
  rating: true,
}).partial();

type TestimonialInputSchemaType = z.infer<typeof testimonialInputSchema>;

interface UserTextReviewProps {
  title: string;
  questions: string[];
  isVideoReview: boolean;
  onChange: (slide: number) => void;
}

export default function TestimonialForm({
  title,
  questions,
  onChange,
  isVideoReview,
}: UserTextReviewProps) {
  const [review, setReview] = useRecoilState(testimonialTextAtom);
  const setTestimonialState = useSetRecoilState(testimonialState);
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
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-b from-background to-secondary/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl rounded-xl p-6 md:p-8 text-start"
      >
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium text-foreground">
          {title}
        </h1>
        <div className="mt-4 space-y-3 text-left">
          {questions?.map((question) => (
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
            className="mt-6 space-y-6"
          >
            {/* Text Review Input */}
            <FormField
              control={form.control}
              name="textReview"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="w-full min-h-[120px] p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-200"
                      placeholder="Write something..."
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setReview(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a rating" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} Stars
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="p-4 mt-4 bg-gray-100 rounded-lg text-left">
              <h3 className="text-lg font-semibold">Data:</h3>
              <pre className="text-sm text-gray-700">
                {JSON.stringify(form.watch(), null, 2)}
              </pre>
            </div>
            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4">
              <Button type="submit" className="w-full py-3 rounded-lg">
                Next
              </Button>
              {isVideoReview && (
                <div className="text-center">
                  <p className="text-gray-500">or</p>
                  <div
                    className="group cursor-pointer hover:scale-105 transition duration-200"
                    onClick={() => onChange(2)}
                  >
                    <h1 className="text-sm font-medium group-hover:underline">
                      Record a <span className="font-semibold">video</span>
                    </h1>
                  </div>
                </div>
              )}
            </div>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
