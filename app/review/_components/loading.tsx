import { Button } from "@/components/ui/button";

export const LoadingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="text-center max-w-3xl mx-auto space-y-8">
        {/* Badge Skeleton */}
        <div className="flex justify-center">
          <div className="w-40 h-8 bg-secondary rounded-full animate-pulse" />
        </div>

        {/* Title Skeleton */}
        <div className="space-y-4">
          <div className="h-12 bg-secondary rounded-lg w-3/4 mx-auto animate-pulse" />
          <div className="h-12 bg-secondary rounded-lg w-1/2 mx-auto animate-pulse" />
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-secondary rounded w-full animate-pulse" />
          <div className="h-4 bg-secondary rounded w-5/6 mx-auto animate-pulse" />
          <div className="h-4 bg-secondary rounded w-4/6 mx-auto animate-pulse" />
        </div>

        {/* Buttons Skeleton */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            className="w-full sm:w-48 h-14 animate-pulse"
            variant="secondary"
            size="lg"
            disabled
          />
          <Button
            className="w-full sm:w-48 h-14 animate-pulse"
            variant="outline"
            size="lg"
            disabled
          />
        </div>
      </div>

      {/* Footer Text Skeleton */}
      <div className="mt-20 text-center">
        <div className="h-4 bg-secondary rounded w-64 mx-auto animate-pulse" />
      </div>
    </div>
  );
};
