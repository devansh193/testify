"use client";
import { Button } from "@/components/ui/button";
import { clientBoardDetails } from "@/recoil/client-atom/atom";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";

export const UserNav = () => {
  const router = useRouter();
  const boardDetails = useRecoilValue(clientBoardDetails);

  if (!boardDetails?.boardTitle) return null;

  return (
    <div className="relative px-4 sm:px-6 h-14 w-full max-w-5xl flex items-center justify-between">
      <Link href={`/${boardDetails.boardTitle}/review`}>
        <h1 className="text-lg sm:text-xl md:text-2xl font-sans font-medium hover:cursor-pointer truncate max-w-[200px] sm:max-w-[300px] md:max-w-none">
          {boardDetails.boardTitle}
        </h1>
      </Link>
      <Button
        variant={"ghost"}
        onClick={() => router.back()}
        className="absolute right-2 sm:relative sm:right-0"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
    </div>
  );
};
