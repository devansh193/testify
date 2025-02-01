import { Skeleton } from "@/components/ui/skeleton";

export const LoadingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-b from-background to-secondary/20">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="flex justify-center">
          <Skeleton className="w-48 h-10 rounded-full" />
        </div>
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <div className="space-y-2 max-w-2xl mx-auto">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6 mx-auto" />
          <Skeleton className="h-5 w-4/5 mx-auto" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Skeleton className="h-14 w-48 rounded-lg" />
          <Skeleton className="h-14 w-48 rounded-lg" />
        </div>
      </div>
      <div className="mt-8 text-center">
        <Skeleton className="h-5 w-64 mx-auto" />
      </div>
    </div>
  );
};
