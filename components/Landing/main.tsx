import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Main() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 max-w-3xl mx-auto mt-2">
      <div className="relative px-4 sm:px-7 py-2 bg-blue-200 border-2 border-blue-300 rounded-full leading-none flex items-center">
        <span className="flex items-center space-x-5">
          <span className="text-xs sm:text-xs font-medium text-blue-700">
            Trusted by 35,000+ people
          </span>
        </span>
      </div>
      <div className="text-center">
        <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-semibold text-black">
          Collect and showcase
          <br />
          customer testimonials
        </h1>
      </div>
      <p className="font-sans font-medium mt-4 text-sm sm:text-base md:text-lg text-[#64758B] text-center max-w-2xl">
        Easily showcase glowing reviews on your site with ready-made, optimized
        components—just copy, paste, and go!
      </p>
      <div className="mt-6 sm:mt-8">
        <Link href={"/sign-in"}>
          <button className="flex items-center justify-center gap-x-2 bg-blue-700 text-white font-semibold font-sans rounded-xl px-4 py-2 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
            Get Started for Free <ArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}
