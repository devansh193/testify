import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const Main = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB]">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl -mt-20">
          Collect and Showcase
          <br />
          Customer <span className="text-blue-600">Testimonials</span>
        </h1>
      </div>
      <p className="mx-auto max-w-[700px] text-center text-gray-500 md:text-xl dark:text-gray-400 mt-2"> 
        credibility and convert more customers.
      </p>
      <div className="w-full flex flex-col items-center max-w-sm space-y-2 mt-6">
          <Link href={"/dashboard"}>
          <Button
            type="submit"
            className="bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
        <p className="text-xs text-gray-500 mt-2">
          Start your 14-day free trial. No credit card required.
        </p>
      </div>
    </div>
  );
};
