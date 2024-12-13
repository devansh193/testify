import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const VideoSlideButton = () => {
  return (
    <div className="flex items-center justify-between gap-x-2">
      <Button className="w-full" variant={"outline"}>
        <ArrowLeft className="mr-2 size-5" />
        Slide
      </Button>
      <Button className="w-full" variant={"outline"}>
        Slide
        <ArrowRight className="ml-2 size-5" />
      </Button>
    </div>
  );
};
