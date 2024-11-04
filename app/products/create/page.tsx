"use client";
import TestifyLogo from "@/components/Logo";
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
import { descriptionAtom, titleAtom } from "@/recoil/atom";
import { Edit2, Video } from "lucide-react";
import { useRecoilState } from "recoil";

const Create = () => {
  const [title, setTitle] = useRecoilState(titleAtom);
  const [description, setDescription] = useRecoilState(descriptionAtom);
  return (
    <main className="flex">
      <div className="hidden md:block w-96 bg-gray-50 h-screen border-r-2 border-gray-200">
        <div className="h-14 bg-gray-50 border-r border-b-2 border-gray-200  p-4">
          <TestifyLogo />
        </div>
        <div className="m-4 space-y-4">
          <div>
            <Label>Title</Label>
            <Input
              value={title}
              placeholder="Your logo here"
              onChange={(e) => setTitle(e.target.value)}
              className="bg-white"
            />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea
              value={description}
              placeholder="description here"
              onChange={(e) => setDescription(e.target.value)}
              className="bg-white"
            />
          </div>
          <div>
            <Label>Product image</Label>
            <Switch id="product-image" className="ml-2" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-screen w-full">
        <div className="h-14 bg-white border-b-2 border-gray-200 p-4">
          products-create
        </div>
        <div className="flex items-center justify-center mt-32">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="text-4xl">{title}</CardTitle>
              <CardDescription className="w-[450px] text-center text-sm">
                {" "}
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <div className="flex items-center justify-center gap-x-2">
                <Button>
                  <Video className="mr-2 text-xs" /> Record a vide
                </Button>
                <Button className="bg-gray-50 hover:bg-gray-100 text-black">
                  <Edit2 className="mr-2 text-xs" /> Write a review
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Create;
