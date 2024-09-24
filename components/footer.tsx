import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full h-14 px-4 p-2">
      <div className="md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
        <Logo name={true} />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size={"sm"} variant={"ghost"} className="text-white">
            Privacy Policy
          </Button>
          <Button size={"sm"}  variant={"ghost" } className="text-white">
          Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
