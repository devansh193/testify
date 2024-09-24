import Link from "next/link";
import { Button } from "./ui/button";

export const Marketing = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col pt-10">
        <h1 className="text-3xl md:text-5xl text-center font-bold mb-6 text-neutral-200">
          Getting{" "}
          <span className="text-3xl md:text-5xl text-blue-500 font-bold">
            testimonials
          </span>{" "}
          becomes easy
        </h1>
      </div>
      <div className="text-sm md:text-xl text-neutral-500 mt-4 max-w-xl text-center mx-auto font-semibold ">
        Gathering testimonials can be a challenge, but that&apos;s where <span className="text-blue-500">Testify </span>
        comes in. With our platform, you can quickly and easily collect text and
        video testimonials from your customers in just a few minutes—no need for
        a developer or complicated website setup.
      </div>
      <div className="flex items-center justify-between mt-6 gap-x-4">
            <Link href={"/dashboard"}>
            <Button className="bg-blue-600 hover:bg-blue-500 border-blue-700 font-semibold">
                Try for free
            </Button>
            </Link>
            <Button variant={"outline"} className="hover:bg-neutral-200 hover:text-black border-2 border-neutral-800 font-semibold">
                Contact us
            </Button>
      </div>
    </div>
  );
}
