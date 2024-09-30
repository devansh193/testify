import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-9xl font-extrabold text-black">404</h1>
          <h2 className="text-4xl font-bold text-gray-900">Page Not Found</h2>
          <p className="text-xl text-gray-600">
            whoops-a-daisy! The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            asChild
            variant="default"
            className="border-black text-black bg-white hover:bg-neutral-100 hover:text-black transition-colors"
          >
            <Link href="/">Go Home</Link>
          </Button>
          <Button
            asChild
            variant="default"
            className="border-black text-white hover:bg-black hover:text-white transition-colors"
          >
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
