import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Ready = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-blue-100 h-[450px]">
      <h2 className="text-blue-500 text-xs font-semibold uppercase tracking-wide">
        READY TO GET STARTED
      </h2>
      <h1 className="text-4xl font-medium text-black sm:text-5xl mt-2">
        Start your free trial today.
      </h1>
      <Link href={"/sign-in"} className="mt-8">
        <button className="flex items-center justify-center gap-x-2 bg-blue-700 text-white font-semibold font-sans rounded-xl px-4 py-2 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
          Get Started for Free <ArrowRight />
        </button>
      </Link>
    </div>
  );
};
