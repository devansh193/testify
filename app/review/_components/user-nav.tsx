import { Button } from "@/components/ui/button";
import { userCurrentSlideAtom } from "@/recoil/atom";
import {
  userPreviousSlideAtom,
  userSideBoardTitle,
} from "@/recoil/user-atom/atom";
import { ChevronLeft } from "lucide-react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const UserNav = () => {
  const previousSlide = useRecoilValue(userPreviousSlideAtom);
  const setCurrentSlide = useSetRecoilState(userCurrentSlideAtom);
  const title = useRecoilValue(userSideBoardTitle);
  return (
    <div className="ml-4 h-14 w-full max-w-9xl flex items-center justify-start sm:justify-between">
      <h1
        className="text-xl md:text-2xl font-sans font-medium hover:cursor-pointer"
        onClick={() => setCurrentSlide(0)}
      >
        {title}
      </h1>
      <Button variant={"ghost"} onClick={() => setCurrentSlide(previousSlide)}>
        <ChevronLeft />
      </Button>
    </div>
  );
};
