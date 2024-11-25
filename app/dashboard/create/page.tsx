"use client";

import React, { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  formDataState,
  currentStepState,
  isSidebarOpenState,
} from "@/recoil/atom";
import TestifyLogo from "@/components/Logo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import {
  FileImage,
  Star,
  User,
  Loader,
  Pencil,
  Video,
  Hash,
  Menu,
} from "lucide-react";
import Image from "next/image";
import { createProduct } from "@/action/products/product";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ProductDetails from "./_components/productDetails";
import RateExperience from "./_components/rateExperience";
import PersonalInfo from "./_components/personalnfo";
import ThankYou from "./_components/thankyou";

const Create: React.FC = () => {
  const { data: session } = useSession();
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const formData = useRecoilValue(formDataState);
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(isSidebarOpenState);
  const userId = session?.user.id;
  const emojis = ["😠", "🙁", "😐", "😊", "😄"];

  const steps = [
    { title: "Product details", content: <ProductDetails /> },
    { title: "Rate your experience", content: <RateExperience /> },
    { title: "Get personal 😏", content: <PersonalInfo /> },
    { title: "Thank giving", content: <ThankYou /> },
  ];

  const handleNext = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep, steps.length, setCurrentStep]);

  const handlePrevious = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep, setCurrentStep]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const toastId = toast.message("Creating product", {
        icon: <Loader className="animate-spin" />,
      });

      try {
        const result = await createProduct({
          title: formData.title,
          description: formData.description,
          questions: formData.questions,
          rating: formData.emojiRatings,
          userId: userId || "",
        });
        if (result.success) {
          toast.success("Product added successfully.", {
            id: toastId,
            icon: "",
          });
        } else {
          toast.error(result.message, {
            id: toastId,
            icon: <Loader className="animate-spin" />,
          });
        }
      } catch (_error) {
        console.log(_error);
      }
    },
    [formData, userId]
  );

  const SidebarContent = React.memo(() => (
    <>
      <div className="h-14 bg-white border-r border-b-2 border-gray-200 px-2 pt-3">
        <TestifyLogo />
      </div>
      <div className="flex-grow overflow-auto p-4 bg-white">
        <h2 className="text-lg md:text-2xl font-bold mb-4">
          {steps[currentStep].title}
        </h2>
        {steps[currentStep].content}
      </div>
      <div className="p-4 flex justify-between">
        <Button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          variant="outline"
          className="w-full sm:w-auto"
        >
          <ArrowLeftIcon className="mr-1" /> Previous
        </Button>
        {currentStep === steps.length - 1 ? (
          <Button onClick={handleSubmit} className="w-full sm:w-auto">
            Submit
          </Button>
        ) : (
          <Button onClick={handleNext} className="w-full sm:w-auto">
            Next <ArrowRightIcon className="ml-1" />
          </Button>
        )}
      </div>
    </>
  ));

  SidebarContent.displayName = "SidebarContent";

  return (
    <main className="flex flex-col md:flex-row bg-gray-100 w-full max-w-[100vw]">
      <div className="md:hidden">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="m-2">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="w-full">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:w-1/4 bg-gray-50 md:h-screen border-r-2 border-gray-200 flex-col w-full">
        <SidebarContent />
      </div>
      <div className="flex-grow bg-neutral-50 md:h-screen overflow-auto w-full md:w-3/4">
        <div className="hidden sm:block h-14 bg-white border-b-2 border-gray-200 p-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Create</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="p-4 md:p-6 lg:p-8 flex items-center justify-center">
          <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl shadow-lg">
            <div className="p-4">
              <Label className="bg-green-100 rounded-full p-1 text-xs text-green-700 border border-green-500">
                Live preview
              </Label>
            </div>
            <CardHeader className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4">
                {currentStep === 0 ? (
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-green-100 p-2">
                    <FileImage className="w-6 h-6 text-emerald-500" />
                  </div>
                ) : currentStep === 1 ? (
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-green-100 p-2">
                    <Star className="w-6 h-6 text-emerald-500" />
                  </div>
                ) : currentStep === steps.length - 1 ? (
                  <Label className="text-6xl">🫡</Label>
                ) : (
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-green-100 p-2">
                    <User className="w-6 h-6 text-emerald-500" />
                  </div>
                )}
              </div>
              <CardTitle className="text-xl md:text-4xl font-bold">
                {currentStep === 2
                  ? "Get personal 😏"
                  : formData.title || "Your product title"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {currentStep === 0 ? (
                <div className="space-y-4">
                  <p className="text-gray-700 text-center text-lg">
                    {formData.description ||
                      "Add a description for your product"}
                  </p>
                  {formData.image.preview && (
                    <div className="p-4">
                      <div className="relative mx-auto">
                        <div className="absolute -inset-4 bg-white/40 backdrop-blur-sm rounded-lg shadow-[0_0_1rem_rgba(0,0,0,0.05)]" />
                        <div className="relative rounded-sm overflow-hidden">
                          <Image
                            src={formData.image.preview}
                            alt="Preview"
                            width={500}
                            height={300}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : currentStep === 1 ? (
                <div className="">
                  <h1 className="text-xl font-semibold">
                    Rate your experience
                  </h1>
                  {formData.questions.map((point, index) => (
                    <p
                      key={index}
                      className="text-gray-700 flex items-center text-md mt-2"
                    >
                      <Hash className="mr-1 size-4 text-gray-700" />
                      {point || `Points to remember ${index + 1}`}
                    </p>
                  ))}

                  {formData.emojiRatings && (
                    <div className="flex justify-center gap-x-4 py-4">
                      {emojis.map((emoji, index) => (
                        <button
                          key={index}
                          className="text-4xl hover:scale-110 transition-transform"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  )}

                  <Textarea
                    placeholder="Write something nice ✨"
                    className="min-h-[200px] mt-4"
                  />
                </div>
              ) : currentStep === 2 ? (
                <PersonalInfo />
              ) : (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-center">
                    {formData.thankYouMessage || "Thank you for your review!"}
                  </h2>
                  <p className="text-center text-gray-600">
                    We appreciate your feedback and time.
                  </p>
                </div>
              )}

              <div className="mt-8">
                {currentStep === 0 && formData.videoReview ? (
                  <div className="flex items-center justify-center gap-x-4">
                    <Button className="w-full">
                      <Video className="mr-2 size-5" />
                      Record a video
                    </Button>
                    <Button className="w-full">
                      <Pencil className="mr-2 size-5" /> Write a review
                    </Button>
                  </div>
                ) : currentStep === 0 && !formData.videoReview ? (
                  <div className="flex items-center justify-center">
                    <Button className="w-full">
                      <Pencil className="size-4 mr-2" />
                      Write a review
                    </Button>
                  </div>
                ) : (
                  ""
                )}
                {currentStep === steps.length - 2 && (
                  <Button className="w-full mt-4">Submit</Button>
                )}
                <div className="flex justify-center items-center gap-2 mt-4">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        currentStep === index ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default React.memo(Create);
