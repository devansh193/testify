import Link from "next/link";

export function Main() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 max-w-4xl mx-auto mt-2">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative px-4 sm:px-7 py-2 sm:py-4 bg-black rounded-full leading-none flex items-center">
          <span className="flex items-center space-x-5">
            <span className="text-xs sm:text-sm md:text-base text-gray-100">
              Trusted by 35,000+ people
            </span>
          </span>
        </div>
      </div>
      <div className="text-center">
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight">
          Collect and showcase
          <br />
          customer testimonials
        </h1>
      </div>
      <p className="font-sans font-medium mt-4 text-sm sm:text-base md:text-lg text-[#ACACAC] text-center max-w-2xl">
        Easily showcase glowing reviews on your site with ready-made, optimized
        components—just copy, paste, and go!
      </p>
      <div className="mt-6 sm:mt-8">
        <Link href={"/sign-in"}>
          <button className="bg-gradient-to-r from-[#E6D6C8] to-white text-black font-semibold font-sans rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
            Get Started for Free
          </button>
        </Link>
      </div>
    </div>
  );
}
