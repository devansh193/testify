"use client";
import { Button } from "@/components/ui/button";
import { clientBoardDetails } from "@/recoil/client-atom/atom";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";

export const UserNav = () => {
  const router = useRouter();
  const boardDetails = useRecoilValue(clientBoardDetails);

  if (!boardDetails?.boardTitle) return null;

  return (
    <div className="ml-4 h-14 w-full max-w-9xl flex items-center justify-start sm:justify-between">
      <h1 className="text-xl md:text-2xl font-sans font-medium hover:cursor-pointer">
        {boardDetails.boardTitle}
      </h1>
      <Button variant={"ghost"} onClick={() => router.back()}>
        <ChevronLeft />
      </Button>
    </div>
  );
};
