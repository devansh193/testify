import { userSlideSelector } from "@/recoil/atom";
import { useSetRecoilState } from "recoil";

export const UserNav = ({ title }: { title: string }) => {
  const setSlide = useSetRecoilState(userSlideSelector);
  return (
    <div className="ml-4 h-14 w-full max-w-9xl flex items-center justify-start sm:justify-between">
      <h1
        className="text-xl md:text-2xl font-sans font-medium hover:cursor-pointer"
        onClick={() => setSlide(0)}
      >
        {title}
      </h1>
    </div>
  );
};
