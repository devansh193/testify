import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Work = () => {
  return (
    <div className=" mt-8 sm:mt-12 w-full max-w-5xl mx-auto p-4 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-sans font-semibold bg-gradient-to-r from-white to-[#E7D6C9] bg-clip-text text-transparent">
        How it works?
      </h1>
      <div className="grid grid-cols-2 gap-x-12 mt-12">
        <div className="col-span-1  flex items-center justify-center">
          <Image
            src={"/dashboard.jpeg"}
            alt="dashboard"
            height={200}
            width={400}
            className="ring-8 ring-[#262626] rounded-xl p-1"
          />
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-2xl font-sans font-semibold">Create board</h1>
          <p className="text-lg font-sans font-medium text-justify">
            This page allows users to create a board by entering the required
            details. The board serves as a foundation for organizing and
            managing information, whether for projects, tasks, or reviews. Users
            can customize their board to suit their needs and begin managing
            their content efficiently.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-4 gap-x-12">
        <div className="col-span-1 flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-2xl font-sans font-semibold">Create board</h1>
          <p className="text-lg font-sans font-medium text-justify">
            This page allows users to create a board by entering the required
            details. The board serves as a foundation for organizing and
            managing information.
          </p>
        </div>
        <div className="col-span-1  flex items-center justify-center">
          <Image
            src={"/board-create.jpeg"}
            alt="dashboard"
            height={200}
            width={400}
            className="ring-8 p-1 ring-[#262626] rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-4 gap-x-12">
        <div className="col-span-1  flex items-center justify-center">
          <Image
            src={"/board-manage.jpeg"}
            alt="dashboard"
            height={200}
            width={400}
            className="ring-8 p-1 ring-[#262626] rounded-xl"
          />
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-2xl font-sans font-semibold">Create board</h1>
          <p className="text-lg font-sans font-medium text-justify">
            This page allows users to create a board by entering the required
            details. The board serves as a foundation for organizing and
            managing information.
          </p>
        </div>
      </div>

      <Link href={"/sign-in"} className="mt-10">
        <button className="flex items-center justify-center gap-x-2 bg-gradient-to-r from-[#E6D6C8] to-white text-black font-semibold font-sans rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
          Get Started for Free <ArrowRight />
        </button>
      </Link>
    </div>
  );
};
