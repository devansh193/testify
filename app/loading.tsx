import { Quote } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Quote className="size-20 text-black animate-bounce mr-2" />
        </div>
        <p className="text-gray-500 max-w-md mx-auto">
          We&apos;re preparing your content. This will only take a moment.
        </p>
      </div>
    </div>
  );
}
