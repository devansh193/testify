import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black mb-4">Testify</h1>
        <div className="flex items-center justify-center mb-4">
          <Loader2 className="h-8 w-8 text-black animate-spin mr-2" />
          <span className="text-xl text-gray-600">Loading...</span>
        </div>
        <p className="text-gray-500 max-w-md mx-auto">
          We&apos;re preparing your content. This will only take a moment.
        </p>
      </div>
    </div>
  );
}
