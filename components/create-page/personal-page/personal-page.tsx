"use client";
import { useRecoilValue } from "recoil";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { personalPageTitle } from "@/recoil/atom";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileImage } from "lucide-react";

export default function PersonalPage() {
  const title = useRecoilValue(personalPageTitle);

  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-[600px]">
        <CardHeader className="gap-y-2">
          <CardTitle className="text-3xl font-sans font-light">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
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
              Your occupation
            </Label>
            <Input type="text" placeholder="Boxer" className="mt-1" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="text-sm text-gray-500">
            By submitting, you agree we may share your review in our marketing.
            We appreciate your support!
          </p>
          <Button className="w-full mt-4 h-[45px] text-md ">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
