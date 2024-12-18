import Link from "next/link";

export const Work = () => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col">
      <div className="h-screen grid grid-cols-1 sm:grid-cols-5 bg-white">
        <div className="col-span-3 flex items-center justify-center rounded-lg px-4 py-2">
          <div className="w-full h-[550px] bg-[#E7A458] rounded-xl p-4"></div>
        </div>
        <div className="col-span-2 flex items-center justify-center rounded-lg m-4 p-4">
          <div className="w-full max-w-[550px] flex flex-col items-center justify-center">
            <h1 className="text-base sm:text-lg font-sans font-semibold text-[#06040E]">
              REVIEWS
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-sans text-[#06040E] text-center">
              Customize without compromize
            </h1>
            <p className="mt-4 text-2xl text-start p-4 font-medium font-sans text-[#06040E]">
              Showcase customer feedback effortlessly with Testify&apos;s
              beautifully designed review cards—because average reviews just
              won&apos;t do.
            </p>
            <div className="flex self-start mt-4 ml-4">
              <Link href={"/dashboard"}>
                <button className="relative overflow-hidden group bg-[#452523] hover:bg-[#452523] text-white font-sans font-medium text-2xl px-4 py-3 rounded-xl transition-colors duration-300 ease-in-out">
                  <span className="relative z-10 group-hover:text-black transition-colors duration-500 ease-in-out">
                    Start for free
                  </span>
                  <span className="absolute inset-0 bg-[#E7A458]  transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                  <span className="absolute inset-0 bg-[#F8E1CD]  transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 bg-white">
        <div className="col-span-2 flex items-center justify-center rounded-lg m-4 p-4">
          <div className="w-full max-w-[550px] flex flex-col items-center justify-center">
            <h1 className="text-base sm:text-lg font-sans font-semibold text-[#06040E]">
              REVIEWS
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-sans text-[#06040E] text-center">
              Customize without compromize
            </h1>
            <p className="mt-4 text-2xl text-start p-4 font-medium font-sans text-[#06040E]">
              Showcase customer feedback effortlessly with Testify&apos;s
              beautifully designed review cards—because average reviews just
              won&apos;t do.
            </p>
            <div className="flex self-start mt-4 ml-4">
              <Link href={"/dashboard"}>
                <button className="relative overflow-hidden group bg-[#452523] hover:bg-[#452523] text-white font-sans font-medium text-2xl px-4 py-3 rounded-xl transition-colors duration-300 ease-in-out">
                  <span className="relative z-10 group-hover:text-black transition-colors duration-500 ease-in-out">
                    Start for free
                  </span>
                  <span className="absolute inset-0 bg-[#E7A458]  transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                  <span className="absolute inset-0 bg-[#F8E1CD]  transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-center rounded-lg px-4 py-2">
          <div className="w-full h-[550px] bg-[#AECEDE] rounded-xl p-4"></div>
        </div>
      </div>
    </div>
  );
};
