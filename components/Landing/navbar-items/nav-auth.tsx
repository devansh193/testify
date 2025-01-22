import Link from "next/link";

export const NavAuth = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 md:ml-8">
      <Link href="/sign-in">
        <button className="bg-black text-white font-semibold font-sans rounded-xl px-6 py-2 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
          Log in
        </button>
      </Link>
      <Link href={"/sign-up"}>
        <button className="bg-blue-700 text-white font-semibold font-sans rounded-xl px-6 py-2 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
          Get Started for Free
        </button>
      </Link>
    </div>
  );
};
