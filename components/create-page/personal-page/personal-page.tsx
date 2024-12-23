"use client";
import { useRecoilValue } from "recoil";
import { personalFeedbackTitleAtom } from "@/recoil/atom";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileImage, Pencil } from "lucide-react";
import { CreateNav } from "../create-page-navbar";

export default function PersonalPage() {
  const title = useRecoilValue(personalFeedbackTitleAtom);

  return (
    <div className="flex flex-col p-4 md:p-8">
      {/* Navbar */}
      <CreateNav />
      {/* Main content */}
      <div className="flex items-center justify-center mt-24 sm:mt-36">
        <div className="max-w-[600px] w-full flex flex-col items-start justify-start gap-y-4 sm:gap-y-2">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-sans">
            {title}
          </h1>
          {/* <p className="text-xl mt-2 text-justify">{description}</p> */}
          <div className="w-full">
            <div>
              <Label className="text-sm font-semibold text-gray-500">
                Your name
              </Label>
              <Input type="text" placeholder="Tyler Durden" className="mt-1" />
            </div>
            <div>
              <Label className="text-sm font-semibold text-gray-500">
                Your image
              </Label>
              <div className="mt-1 border-2 border-dashed rounded-lg p-2 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                <input type="file" id="image" className="hidden" />
                <label htmlFor="image" className="cursor-pointer">
                  <>
                    <div className="flex items-center justify-center mb-1">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <FileImage className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="text-sm font-medium">Click to upload</div>
                    <div className="text-xs text-gray-500">
                      Max size:MB - PNG, JPEG & WebP
                    </div>
                  </>
                </label>
              </div>
            </div>
            <div>
              <Label className="text-sm font-semibold text-gray-500">
                Your email
              </Label>
              <Input
                type="email"
                placeholder="tylerdurden@fightclub.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-sm font-semibold text-gray-500">
                Your profession
              </Label>
              <Input type="text" placeholder="Soap salesman" className="mt-1" />
            </div>
          </div>
          <div className="space-y-2 sm:space-y-0 sm:space-x-4 mt-4 w-full">
            <Button size={"lg"} className="h-[45px] w-full">
              <Pencil className="mr-2" />
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
