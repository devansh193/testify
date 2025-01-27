"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userSlideSelector } from "@/recoil/atom";
import { motion } from "framer-motion";
import { FileImage, Pencil } from "lucide-react";
import { useSetRecoilState } from "recoil";

interface UserPersonalProps {
  title: string;
}

export const UserPersonal = ({ title }: UserPersonalProps) => {
  const setSlide = useSetRecoilState(userSlideSelector);

  return (
    <div className="flex flex-col p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=""
      >
        <div className="flex items-center justify-center mt-12 sm:mt-24">
          <div className="max-w-[600px] w-full flex flex-col items-start justify-start gap-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900">
              {title}
            </h1>
            <form className="w-full space-y-6">
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tyler Durden"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="image"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your image
                  </Label>
                  <div className="mt-1 border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="file"
                      id="image"
                      className="hidden"
                      accept="image/png,image/jpeg,image/webp"
                    />
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
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tylerdurden@fightclub.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="profession"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your profession
                  </Label>
                  <Input
                    id="profession"
                    type="text"
                    placeholder="Soap salesman"
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-xl h-[45px]"
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Submit
                </Button>
                <div className="flex flex-col items-center justify-center pt-2">
                  <p className="text-sm text-gray-500">or</p>
                  <button
                    type="button"
                    className="text-sm font-semibold text-primary hover:underline mt-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    onClick={() => setSlide(1)}
                  >
                    Edit response
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
