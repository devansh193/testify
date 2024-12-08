"use client";
import { useRecoilValue } from "recoil";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { descriptionAtom, imageAtom, titleAtom } from "@/recoil/atom";
import Image from "next/image";
export default function ProductDetails() {
  const title = useRecoilValue(titleAtom);
  const description = useRecoilValue(descriptionAtom);
  const image = useRecoilValue(imageAtom);
  return (
    <div className="flex items-center justify-center bg-blue-200 m-4">
      <Card>
        <CardHeader className="items-center">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image alt="img" height={100} width={300} src={image.preview} />
        </CardContent>
      </Card>
    </div>
  );
}
