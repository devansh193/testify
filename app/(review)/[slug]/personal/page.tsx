"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Image from "next/image";
import { FileImage, Loader, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { clientBoardDetails } from "@/recoil/client-atom/atom";
import { testimonialState } from "@/recoil/testimonial-atom/atom";
import { UserNav } from "../../_components/user-nav";
import { useCreateTestimonial } from "@/features/testimonial/api/use-create-testimonial";
import { toast } from "sonner";
import { ThankYou } from "../../_components/thankyou-comp";

const testimonialUserDetailSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  profession: z.string().min(2, "Profession must be at least 2 characters"),
});

type TestimonialUserDetailType = z.infer<typeof testimonialUserDetailSchema>;

const Personal = () => {
  const boardDetails = useRecoilValue(clientBoardDetails);
  const [image, setImage] = useState<string | null>(null);
  const [slide, setSlide] = useState(0);
  const setTestimonialState = useSetRecoilState(testimonialState);
  const { mutate: createTestimonial } = useCreateTestimonial();

  const form = useForm<TestimonialUserDetailType>({
    resolver: zodResolver(testimonialUserDetailSchema),
    defaultValues: {
      name: "",
      email: "",
      profession: "",
    },
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancelUpload = () => {
    setImage(null);
  };

  const onSubmit = (data: TestimonialUserDetailType) => {
    const toastId = toast.message("Submitting testimonial...", {
      icon: <Loader className="animate-spin" />,
    });
    setTestimonialState((prev) => ({
      ...prev,
      name: data.name,
      email: data.email,
      profession: data.profession,
    }));
    console.log(data);

    createTestimonial(
      {
        name: data.name,
        email: data.email,
        textReview: "This is amazing",
        rating: 4,
        boardId: boardDetails?.id,
      },
      {
        onSuccess: (data) => {
          if (data.code === 409) {
            toast.error("Testimonial with email already exists.", {
              id: toastId,
              icon: "",
            });
          } else {
            toast.success(data.message, {
              id: toastId,
              icon: "",
            });
            setSlide(1);
          }
        },
      }
    );
  };

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center w-full mt-4 gap-y-6 pt-2">
        <UserNav />
        {slide == 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl mt-12 sm:mt-20"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4 sm:mb-6">
              {boardDetails?.personalPageTitle}
            </h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 sm:space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Your name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Tyler Durden" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Your email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="tylerdurden@fightclub.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="profession"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Your profession
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Soap salesman" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <Label
                    htmlFor="image"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your image
                  </Label>
                  <div className="mt-1 border-2 border-dashed rounded-lg p-2 sm:p-4 text-center cursor-pointer hover:bg-gray-50 transition">
                    <input
                      type="file"
                      id="image"
                      className="hidden"
                      accept="image/png,image/jpeg,image/webp"
                      onChange={handleImageUpload}
                    />
                    {image ? (
                      <div className="relative w-full flex justify-center">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt="Preview"
                          className="max-w-full h-auto rounded-lg"
                          height={200}
                          width={200}
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2 sm:right-1/4"
                          onClick={handleCancelUpload}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <label htmlFor="image" className="cursor-pointer">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                            <FileImage className="w-6 h-6 text-gray-400" />
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            Click to upload
                          </span>
                          <span className="text-xs text-gray-500 mt-1">
                            Max size: 5MB - PNG, JPEG & WebP
                          </span>
                        </div>
                      </label>
                    )}
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl h-[40px] sm:h-[45px]"
                  >
                    Submit
                  </Button>
                  <div className="flex flex-col items-center justify-center pt-1 sm:pt-2">
                    <p className="text-xs sm:text-sm text-gray-500">or</p>
                    <button
                      type="button"
                      className="text-xs sm:text-sm font-semibold text-primary hover:underline mt-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Edit response
                    </button>
                  </div>
                </div>
              </form>
            </Form>
          </motion.div>
        ) : (
          <ThankYou />
        )}
      </div>
    </div>
  );
};

export default Personal;
