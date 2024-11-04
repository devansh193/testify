"use client";

import { useState } from "react";
import { useRecoilState } from "recoil";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { descriptionAtom, questionsAtom, titleAtom } from "@/recoil/atom";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Edit2, Video, Image as ImageIcon, DollarSign } from "lucide-react";

const Create = () => {
  const [title, setTitle] = useRecoilState(titleAtom);
  const [description, setDescription] = useRecoilState(descriptionAtom);
  const [currentStep, setCurrentStep] = useState(0);
  const [questions, setQuestions] = useState("");
  const [category, setCategory] = useState("");
  const [hasProductImage, setHasProductImage] = useState(false);

  const steps = [
    {
      title: "Product details",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              placeholder="Your product title"
              onChange={(e) => setTitle(e.target.value)}
              className="bg-white"
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              placeholder="Product description"
              onChange={(e) => setDescription(e.target.value)}
              className="bg-white"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="product-image"
              checked={hasProductImage}
              onCheckedChange={setHasProductImage}
            />
            <Label htmlFor="product-image">Product image</Label>
          </div>
        </div>
      ),
    },
    {
      title: "Product Details",
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="price">Points to remember</Label>
            <Input
              id="questions"
              type="text"
              value={questions}
              placeholder="Enter price"
              onChange={(e) => setQuestions(e.target.value)}
              className="bg-white"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Review & Submit",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Title</h3>
            <p>{title}</p>
          </div>
          <div>
            <h3 className="font-semibold">Description</h3>
            <p>{description}</p>
          </div>
          <div>
            <h3 className="font-semibold">Price</h3>
          </div>
          <div>
            <h3 className="font-semibold">Category</h3>
            <p>{category}</p>
          </div>
          <div>
            <h3 className="font-semibold">Product Image</h3>
            <p>{hasProductImage ? "Yes" : "No"}</p>
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
    // Here you would typically send the data to your backend
    console.log("Submitting product:", {
      title,
      description,
      category,
      hasProductImage,
    });
    // Reset form or redirect user after submission
  };

  return (
    <main className="flex">
      <div className="hidden md:flex flex-col justify-between w-[500px] bg-gray-50 h-screen border-r-2 border-gray-200">
        <div>
          <div className="h-14 bg-gray-50 border-r border-b-2 border-gray-200 p-4">
            <TestifyLogo />
          </div>
          <div className="m-4">
            <h2 className="text-2xl font-bold mb-4">
              {steps[currentStep].title}
            </h2>
            {steps[currentStep].content}
          </div>
        </div>
        <div className="m-4 flex justify-between">
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

      <div className="bg-gray-100 h-screen w-full overflow-auto">
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
        <div className="flex items-center justify-center mt-8 p-4">
          <Card className="w-full max-w-3xl">
            <CardHeader>
              <CardTitle className="text-3xl">
                {title || "New Product"}
              </CardTitle>
              <CardDescription className="text-lg">
                {description || "Add a description for your product"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Product Information</h3>
                  <p>Category: {category || "Not specified"}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Actions</h3>
                  <div className="flex flex-col space-y-2">
                    <Button className="justify-start">
                      <ImageIcon className="mr-2" />{" "}
                      {hasProductImage ? "Change Image" : "Add Image"}
                    </Button>
                    <Button className="justify-start">
                      <Video className="mr-2" /> Record a video
                    </Button>
                    <Button className="justify-start" variant="outline">
                      <Edit2 className="mr-2" /> Write a review
                    </Button>
                    <Button className="justify-start" variant="outline">
                      <DollarSign className="mr-2" /> Set pricing
                    </Button>
                  </div>
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
