"use client";
import { useRecoilValue } from "recoil";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  descriptionAtom,
  imageAtom,
  titleAtom,
  videoAtom,
} from "@/recoil/atom";
import Image from "next/image";
import { Button } from "../../ui/button";
import { Pencil, Video } from "lucide-react";

export default function ProductDetails() {
  const title = useRecoilValue(titleAtom);
  const description = useRecoilValue(descriptionAtom);
  const image = useRecoilValue(imageAtom);
  const video = useRecoilValue(videoAtom);

  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-[600px]">
        <CardHeader className="items-center gap-y-2">
          <CardTitle className="text-5xl font-sans font-medium">
            {title}
          </CardTitle>
          <CardDescription className="text-md text-center font-sans font-normal">
            {description}
          </CardDescription>
        </CardHeader>
        {image?.preview && (
          <CardContent className="flex items-center justify-center">
            <Image
              alt="img"
              height={200}
              width={500}
              className="rounded-xl ring-8 ring-gray-100"
              src={image.preview}
            />
          </CardContent>
        )}
        <CardFooter className="flex items-center justify-center gap-x-4">
          <Button size={"lg"} className="h-[45px]">
            <Pencil className="mr-2" />
            Write a review
          </Button>
          {video && (
            <Button size={"lg"} className="h-[45px]">
              <Video className="mr-2" />
              Record a video
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
