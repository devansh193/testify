import Link from "next/link";
import { useSession } from "next-auth/react";
import { Plus, Users } from "lucide-react";

export function Main() {
  const { data: session } = useSession();
  const href = session ? "/dashboard" : "/sign-in";

  return (
    <section className="min-h-screen py-32 sm:py-16 md:py-24 lg:py-32 bg-brand-25 bg-[#F5F5F5]">
      <div className="text-center flex flex-col items-center gap-4 sm:gap-6">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl flex flex-col md:flex-row items-center justify-center md:justify-start text-black font-sans font-medium p-4">
            <span className="mr-2">Collect and showcase customer</span>
            <span className="text-[#8dbfd7] md:text-white md:bg-[#83b3c9] p-2 rounded-lg md:rotate-[-6deg] rotate-0 hover:rotate-0 transition-all duration-200">
              testimonials
            </span>
          </h1>
        </div>
        <p className="max-w-[550px] text-xl text-black font-sans font-medium">
          Easily showcase glowing reviews on your site with ready-made,
          optimized components—just copy, paste, and go!
        </p>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Link href={href} className="block">
            <button className="relative overflow-hidden group bg-black hover:bg-gray-300 text-white font-sans font-medium text-2xl px-4 py-3 rounded-xl transition-colors duration-300 ease-in-out">
              <span className="relative z-10 group-hover:text-black transition-colors duration-300 ease-in-out">
                Start for free
              </span>
              <span className="absolute inset-0 bg-neutral-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-in-out" />
              <span className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            </button>
          </Link>
        </div>
      </div>
      <div className="relative bg-[#F5F5F5] px-4 py-24 overflow-hidden">
        {/* Feature Cards */}
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {/* Online Store Card */}
            <div className=" bg-[#E5EEF2] rounded-3xl p-8 transform md:translate-y-6 hover:md:translate-y-0 md:rotate-[-3deg] relative z-10 hover:scale-100 transition duration-300">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                Collect <span className="text-xl">›</span>
              </h2>
              <p className="text-gray-700 mb-8">
                Gather authentic reviews from your customers
                effortlessly—whether through simple forms or automated requests.
                It&apos;s never been easier to get the feedback you need!
              </p>
              <div className="bg-[#151718] text-white rounded-xl p-4 space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5" />
                  <span className="font-sans">Register</span>
                </div>
                <div className="flex items-center gap-3">
                  <Plus className="h-5 w-5" />
                  <span className="font-sans">List</span>
                </div>
              </div>
            </div>

            {/* Website Card */}
            <div className=" bg-[#e5aa72] rounded-3xl p-8 transform md:translate-y-12 hover:md:translate-y-0 z-20 hover:scale-100 transition duration-300">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                Manage <span className="text-xl">›</span>
              </h2>
              <p className="text-gray-700 mb-8">
                Stay in control with an intuitive dashboard that helps you
                organize, filter, and respond to reviews. Keep track of all your
                feedback in one place!
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#D19B68] rounded-lg p-4 aspect-video flex items-center justify-center">
                  <span className="text-sm">Photography</span>
                </div>
                <div className="bg-[#D19B68] rounded-lg p-4 aspect-video"></div>
              </div>
            </div>

            {/* Email Marketing Card */}
            <div className="bg-[#E2D4F2] rounded-3xl p-8 md:translate-y-6 hover:md:translate-y-0 transform md:rotate-[3deg] relative z-10 hover:z-30 hover:scale-100 transition duration-300">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                Embed <span className="text-xl">›</span>
              </h2>
              <p className="text-gray-700 mb-8">
                Showcase reviews on your website with just a few clicks! Simply
                embed the ready-made components and let your reviews shine.
              </p>
              <div className="bg-[#2F1C4F] h-32 rounded-2xl"></div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Testify boosts your business by showcasing reviews, with 79% of
              consumers trusting them like personal recommendations.
            </h2>
            <p className="text-xl text-gray-600">
              49% of consumers trust online reviews as much as personal
              recommendations from friends and family.
            </p>
          </div>
        </div>

        {/* Background Shapes */}
        <div className="absolute top-10 left-20 w-16 h-16 bg-[#c1e4f3] rounded-full opacity-50" />
        <div className="absolute top-20 right-20 w-12 h-12 bg-[#E2D4F2] rounded-lg rotate-45 opacity-50" />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-[#E6B17E] rounded-full opacity-30" />
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-[#d6bef2] rounded-lg -rotate-12 opacity-40" />
      </div>
    </section>
  );
}
