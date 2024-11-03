"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Video,
  PenLine,
  Quote,
  Upload,
  Menu,
  Image as ImageIcon,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function TestimonialPage() {
  const [title, setTitle] = useState("Testify");
  const [greeting, setGreeting] = useState(
    "Hey there! 👋 By sharing your honest feedback, you can help other people decide if my product is right for them."
  );
  const [showGreetingImage, setShowGreetingImage] = useState(false);
  const [showGreetingVideo, setShowGreetingVideo] = useState(false);
  const [greetingImage, setGreetingImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setGreetingImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setGreetingImage(null);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200">
            <Quote className="h-4 w-4 text-black" />
          </div>
          <span className="font-medium">testify</span>
        </div>
        {/* Form */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="greeting">Greeting text</Label>
            <Textarea
              id="greeting"
              value={greeting}
              onChange={(e) => setGreeting(e.target.value)}
              className="min-h-[100px] border-gray-300"
            />
          </div>
          <div className="flex items-center justify-between py-3">
            <Label htmlFor="greeting-image" className="cursor-pointer">
              Greeting image
            </Label>
            <Switch
              id="greeting-image"
              checked={showGreetingImage}
              onCheckedChange={setShowGreetingImage}
            />
          </div>
          {showGreetingImage && (
            <div className="space-y-2">
              <Label htmlFor="image-upload">Upload greeting image</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="border-gray-300"
                />
                <Button variant="outline" size="icon">
                  <Upload className="h-4 w-4" />
                  <span className="sr-only">Upload image</span>
                </Button>
              </div>
              {greetingImage && (
                <Button
                  variant="destructive"
                  onClick={handleRemoveImage}
                  className="mt-2 w-full bg-red-500"
                >
                  Remove Image
                </Button>
              )}
            </div>
          )}
          <div className="border border-gray-200"></div>
          <div className="flex items-center justify-between py-3">
            <Label htmlFor="greeting-video" className="cursor-pointer">
              Greeting video
            </Label>
            <Switch
              id="greeting-video"
              checked={showGreetingVideo}
              onCheckedChange={setShowGreetingVideo}
            />
          </div>
          <div className="border border-gray-200"></div>
        </div>
      </div>
      <Button className="w-full bg-gray-800 hover:bg-gray-950 mt-6">
        Save changes
      </Button>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="m-4">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[320px] sm:w-[540px]">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:w-[320px] md:flex-shrink-0">
        <div className="w-full border-r bg-white px-4 py-6">
          <SidebarContent />
        </div>
      </div>
      <div className="flex-grow bg-gray-50">
        <div className="h-14 bg-white border-b border-b-gray-300 px-4 flex items-center">
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
        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
          <Card className="w-full max-w-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl">
                {title}
              </CardTitle>
              <CardDescription className="max-w-[450px] mx-auto mt-2">
                {greeting}
              </CardDescription>
              {showGreetingImage && greetingImage && (
                <div className="mt-4 relative w-full aspect-video">
                  <Image
                    src={greetingImage}
                    alt="Greeting image"
                    fill
                    className="rounded-md object-cover mt-8"
                  />
                </div>
              )}
              {showGreetingImage && !greetingImage && (
                <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-gray-400" />
                </div>
              )}
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="w-full sm:w-auto">
                <Video className="mr-2 h-4 w-4" />
                Record a video
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gray-50 hover:bg-gray-100 text-black"
              >
                <PenLine className="mr-2 h-4 w-4" />
                Write a review
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
