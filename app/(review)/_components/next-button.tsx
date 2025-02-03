import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const NextButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button className="w-full group relative overflow-hidden h-12 rounded-xl transition-all hover:bg-primary/90 hover:shadow-lg text-sm font-medium px-6">
      <div className="flex items-center gap-2">
        <span>{children}</span>
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Button>
  );
};
