import { ArrowRight } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const Main = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Collect and Showcase
          <br />
          Customer <span className="text-blue-600">Testimonials</span>
        </h1>
      </div>
      <p className="mx-auto max-w-[700px] text-center text-gray-500 md:text-xl dark:text-gray-400 mt-4">
        Create a personalized testimonial page in seconds. Boost your
        credibility and convert more customers.
      </p>
      <div className="w-full flex flex-col items-center max-w-sm space-y-2 mt-6">
        <form className="flex space-x-2">
          <Input
            className="max-w-lg flex-1 bg-white border-gray-300"
            placeholder="Enter your email"
            type="email"
          />
          <Button
            type="submit"
            className="bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
        <p className="text-xs text-gray-500 mt-2">
          Start your 14-day free trial. No credit card required.
        </p>
      </div>
    </div>
  );
};
