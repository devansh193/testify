"use client";

import { useState } from "react";
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
import { FileImage, Trash2, Plus, Star, User } from "lucide-react";
import Image from "next/image";

export default function Component() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    questions: [""],
    emojiRatings: true,
    name: "",
    jobTitle: "",
    category: "",
  });
  const emojis = ["😠", "🙁", "😐", "😊", "😄"];

  const updateFormData = (field: string, value: any, index?: number) => {
    setFormData((prev) => {
      if (field === "image" && value === null) {
        // If the image is being removed, revoke the object URL to free up memory
        if (prev.image) {
          URL.revokeObjectURL(URL.createObjectURL(prev.image));
        }
      }
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
      title: "Product Details",
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
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="image">Product Image (Optional)</Label>
            <div className="mt-1 border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="file"
                id="image"
                className="hidden"
                accept="image/*"
                onChange={(e) =>
                  updateFormData(
                    "image",
                    e.target.files ? e.target.files[0] : null
                  )
                }
              />
              <label htmlFor="image" className="cursor-pointer">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <FileImage className="w-6 h-6 text-gray-400" />
                  </div>
                </div>
                <div className="text-sm font-medium">Click to upload</div>
                <div className="text-xs text-gray-500">
                  Supported: .png, .jpeg & .webp
                </div>
              </label>
            </div>
            {formData.image && (
              <Button
                className="w-full mt-2"
                onClick={() => updateFormData("image", null)}
                variant="default"
              >
                Remove Image
              </Button>
            )}
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
                    placeholder={`Question ${index + 1}`}
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
            <Input
              id="name"
              placeholder="Type your name"
              className="mt-1"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="job-title">Job title</Label>
            <Input
              id="job-title"
              placeholder="Software Engineer"
              className="mt-1"
              value={formData.jobTitle}
              onChange={(e) => updateFormData("jobTitle", e.target.value)}
            />
          </div>
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

  const handleSubmit = () => {
    console.log("Submitting product:", formData);
    // Here you would typically send the data to your backend
    // Reset form or redirect user after submission
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <div className="md:w-[500px] bg-gray-50 md:h-screen border-r-2 border-gray-200 flex flex-col">
        <div className="h-14 bg-gray-50 border-r border-b-2 border-gray-200 p-4">
          <TestifyLogo />
        </div>
        <div className="flex-grow overflow-auto p-4">
          <h2 className="text-2xl font-bold mb-4">
            {steps[currentStep].title}
          </h2>
          {steps[currentStep].content}
        </div>
        <div className="p-4 flex justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            variant="outline"
          >
            <ArrowLeftIcon className="mr-1" /> Previous
          </Button>
          {currentStep === steps.length - 1 ? (
            <Button onClick={handleSubmit}>Submit</Button>
          ) : (
            <Button onClick={handleNext}>
              Next <ArrowRightIcon className="ml-1" />
            </Button>
          )}
        </div>
      </div>

      <div className="flex-grow bg-gray-100 md:h-screen overflow-auto">
        <div className="h-14 bg-white border-b-2 border-gray-200 p-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Create</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="p-4 md:p-6 flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
          <Card className="w-full max-w-lg">
            <CardHeader className="flex items-center justify-center">
              <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                {currentStep === 0 ? (
                  <FileImage className="w-6 h-6 text-emerald-500" />
                ) : currentStep === 1 ? (
                  <Star className="w-6 h-6 text-emerald-500" />
                ) : (
                  <User className="w-6 h-6 text-emerald-500" />
                )}
              </div>
              <CardTitle className="text-xl md:text-4xl font-bold">
                {formData.title || steps[currentStep].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {currentStep === 0 ? (
                <div className="space-y-4">
                  <p className="text-gray-700 text-center text-lg">
                    {formData.description ||
                      "Add a description for your product"}
                  </p>
                  {formData.image && (
                    <div className="mt-4">
                      <Image
                        src={URL.createObjectURL(formData.image)}
                        alt="Product"
                        width={500}
                        height={300}
                        className="max-w-full h-auto rounded-lg"
                      />
                    </div>
                  )}
                </div>
              ) : currentStep === 1 ? (
                <div className="">
                  <h1 className="text-2xl font-semibold">
                    Rate your experience
                  </h1>
                  {formData.questions.map((point, index) => (
                    <p key={index} className="text-gray-700 text-lg">
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
                    className="min-h-[150px]"
                  />
                </div>
              ) : (
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
                      placeholder="Tyler Durden"
                      value={formData.name}
                      readOnly
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="preview-job-title"
                      className="text-gray-700 font-semibold"
                    >
                      Job title
                    </Label>
                    <Input
                      id="preview-job-title"
                      placeholder="Soap factory owner"
                      value={formData.jobTitle}
                      readOnly
                      className="mt-1"
                    />
                  </div>

                  <p className="text-sm text-gray-500">
                    By submitting, you agree we may share your review in our
                    marketing.
                  </p>
                </div>
              )}

              <div className="mt-8">
                <div className="flex justify-center gap-2 mb-4">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        currentStep === index ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <Button
                  className="w-full"
                  onClick={
                    currentStep === steps.length - 1 ? handleSubmit : handleNext
                  }
                >
                  {currentStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
