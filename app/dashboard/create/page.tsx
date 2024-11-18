"use client";

import { useEffect, useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import {
  FileImage,
  Trash2,
  Plus,
  Star,
  User,
  Loader,
  Pencil,
  Video,
  Hash,
  Menu,
} from "lucide-react";
import Image from "next/image";
import { createProduct } from "@/action/product";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface FormData {
  title: string;
  description: string;
  image: {
    file: File | null;
    preview: string;
    uploading: boolean;
    error: string;
  };
  questions: string[];
  emojiRatings: boolean;
  videoReview: boolean;
  thankYouMessage: string;
}

const Create = () => {
  const { data: session } = useSession();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    image: {
      file: null,
      preview: "",
      uploading: false,
      error: "",
    },
    questions: [""],
    emojiRatings: true,
    videoReview: true,
    thankYouMessage: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const userId = session?.user.id;
  const emojis = ["😠", "🙁", "😐", "😊", "😄"];

  const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
  const MAX_SIZE_MB = 5;
  const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setFormData((prev) => ({
      ...prev,
      image: {
        ...prev.image,
        error: "",
        uploading: true,
      },
    }));

    try {
      if (!file) {
        throw new Error("No file selected");
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        throw new Error("Invalid file type. Please upload PNG, JPEG, or WebP");
      }
      if (file.size > MAX_SIZE_BYTES) {
        throw new Error(`File size must be less than ${MAX_SIZE_MB}MB`);
      }
      const previewUrl = URL.createObjectURL(file);

      setFormData((prev) => ({
        ...prev,
        image: {
          file: file,
          preview: previewUrl,
          uploading: false,
          error: "",
        },
      }));
    } catch (error) {
      setFormData((prev) => ({
        ...prev,
        image: {
          ...prev.image,
          error: error instanceof Error ? error.message : "Upload failed",
          uploading: false,
        },
      }));
    }
  };

  const removeImage = () => {
    if (formData.image.preview) {
      URL.revokeObjectURL(formData.image.preview);
    }
    setFormData((prev) => ({
      ...prev,
      image: {
        file: null,
        preview: "",
        uploading: false,
        error: "",
      },
    }));
  };

  useEffect(() => {
    return () => {
      if (formData.image.preview) {
        URL.revokeObjectURL(formData.image.preview);
      }
    };
  }, [formData.image.preview]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateFormData = (field: string, value: any, index?: number) => {
    setFormData((prev) => {
      if (field === "questions" && typeof index === "number") {
        const newQuestions = [...prev.questions];
        newQuestions[index] = value;
        return { ...prev, questions: newQuestions };
      }
      if (field === "deleteQuestion" && typeof index === "number") {
        const newQuestions = prev.questions.filter((_, i) => i !== index);
        return { ...prev, questions: newQuestions };
      }
      if (field === "addQuestion") {
        return { ...prev, questions: [...prev.questions, ""] };
      }
      return { ...prev, [field]: value };
    });
  };

  const steps = [
    {
      title: "Product details",
      content: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => updateFormData("title", e.target.value)}
              placeholder="Your product title"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => updateFormData("description", e.target.value)}
              placeholder="Product description"
              className="mt-1 min-h-[150px]"
            />
          </div>
          <div>
            <Label htmlFor="image">Product Image (Optional)</Label>
            <div className="mt-1 border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="file"
                id="image"
                className="hidden"
                accept={ALLOWED_TYPES.join(",")}
                onChange={handleImageUpload}
              />
              <label htmlFor="image" className="cursor-pointer">
                {formData.image.uploading ? (
                  <div className="flex items-center justify-center">
                    <Loader className="w-6 h-6 animate-spin" />
                  </div>
                ) : formData.image.preview ? (
                  <div className="relative">
                    <Image
                      height={100}
                      width={300}
                      src={formData.image.preview}
                      alt="Preview"
                      className="max-h-48 mx-auto rounded"
                    />
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <FileImage className="w-6 h-6 text-gray-400" />
                      </div>
                    </div>
                    <div className="text-sm font-medium">Click to upload</div>
                    <div className="text-xs text-gray-500">
                      Max size: {MAX_SIZE_MB}MB - PNG, JPEG & WebP
                    </div>
                  </>
                )}
              </label>
            </div>

            {formData.image.error && (
              <p className="mt-2 text-sm text-red-500">
                {formData.image.error}
              </p>
            )}

            {formData.image.preview && (
              <Button
                className="w-full mt-2"
                onClick={removeImage}
                variant="default"
              >
                Remove Image
              </Button>
            )}
          </div>
          <div className="flex items-center justify-between mt-4">
            <Label htmlFor="video-toggle">Video review</Label>
            <Switch
              id="video-toggle"
              checked={formData.videoReview}
              onCheckedChange={(checked) =>
                updateFormData("videoReview", checked)
              }
            />
          </div>
        </div>
      ),
    },
    {
      title: "Rate your experience",
      content: (
        <>
          <div>
            <Label>Keep in mind</Label>
            <div className="space-y-2 mt-1">
              {formData.questions.map((question, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Input
                    placeholder={`Points to remember ${index + 1}`}
                    value={question}
                    onChange={(e) =>
                      updateFormData("questions", e.target.value, index)
                    }
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      updateFormData("deleteQuestion", null, index)
                    }
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => updateFormData("addQuestion", null)}
            >
              <Plus className="mr-2" /> Add
            </Button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <Label htmlFor="emoji-toggle">Emoji ratings</Label>
            <Switch
              id="emoji-toggle"
              checked={formData.emojiRatings}
              onCheckedChange={(checked) =>
                updateFormData("emojiRatings", checked)
              }
            />
          </div>
        </>
      ),
    },
    {
      title: "Get personal 😏",
      content: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="name">
              Your name <span className="text-red-500">*</span>
            </Label>
            <Input id="name" placeholder="Type your name" className="mt-1" />
          </div>

          <div>
            <Label htmlFor="job-title">Job title</Label>
            <Input
              id="job-title"
              placeholder="Software Engineer"
              className="mt-1"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Thank giving",
      content: (
        <div>
          <Label htmlFor="thankYouMessage">Thank You Message</Label>
          <Input
            id="thankYouMessage"
            placeholder="Enter your thank you message"
            className="mt-1"
            value={formData.thankYouMessage}
            onChange={(e) => updateFormData("thankYouMessage", e.target.value)}
          />
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
  };

  const SidebarContent = () => (
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
  );

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
                <div className="space-y-6">
                  <div>
                    <Label
                      htmlFor="preview-name"
                      className="text-gray-700 font-semibold"
                    >
                      Your name*
                    </Label>
                    <Input
                      id="preview-name"
                      type="text"
                      onChange={() => {}}
                      placeholder="Tyler Durden"
                      readOnly
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="preview-job-title"
                      className="text-gray-700 font-semibold"
                    >
                      Email
                    </Label>
                    <Input
                      id="preview-job-title"
                      type="email"
                      placeholder="tylerdurden@fightclub.com"
                      readOnly
                      className="mt-1"
                    />
                  </div>

                  <p className="text-sm text-gray-500">
                    By submitting, you agree we may share your review in our
                    marketing.
                  </p>
                </div>
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
export default Create;
