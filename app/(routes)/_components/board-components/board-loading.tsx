import { Skeleton } from "@/components/ui/skeleton";

export const LoadingComponent = () => {
  return (
    <div className="p-4">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-4 rounded-xl bg-white gap-y-4 shadow-sm"
          >
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-4" />
            <div className="flex flex-col gap-y-2 w-full">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-1/4" />
            </div>
            <div className="flex items-center justify-between w-full gap-x-2 mt-4">
              <Skeleton className="h-10 w-1/3" />
              <Skeleton className="h-10 w-1/3" />
              <Skeleton className="h-10 w-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
