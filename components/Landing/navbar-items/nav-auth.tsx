import Link from "next/link";

export const NavAuth = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 md:ml-8">
      <Link
        href="/sign-in"
        className="font-sans font-medium text-white text-lg hover:bg-neutral-900 hover:text-white transition-colors duration-300 p-2 rounded-lg"
      >
        Login
      </Link>
      <Link href={"/sign-up"}>
        <button className="bg-gradient-to-r from-[#E6D6C8] to-white text-black font-semibold font-sans rounded-xl px-6 py-2 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
          Get Started for Free
        </button>
      </Link>
    </div>
  );
};
