import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorComponentProps {
  onRetry: () => void;
}

export const ErrorComponent: React.FC<ErrorComponentProps> = ({ onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
      <h2 className="text-2xl font-semibold mb-2">
        Oops! Something went wrong
      </h2>
      <p className="text-gray-600 mb-4">
        We couldn&apos;t load the boards. Please try again.
      </p>
      <Button onClick={onRetry} variant="outline">
        Retry
      </Button>
    </div>
  );
};
