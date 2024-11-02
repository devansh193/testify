import { ArrowRight, Star } from "lucide-react";
import { Heading } from "../heading";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { Button } from "../ui/button";
import Link from "next/link";

export function Main() {
  return (
    <section className="min-h-screen py-24 sm:py-32 bg-brand-25 bg-gray-50">
      <MaxWidthWrapper className="text-center">
        <div className="relative mx-auto text-center flex flex-col items-center gap-10">
          <div>
            <h1 className="text-xl sm:text-2xl">Reviews in seconds.</h1>
            <Heading className="sm:text-5xl font-sans">
              <span>Collect, Manage and Showcase</span>
              <br />
              <span className="">
                High-Quality Customer{" "}
                <span className="text-blue-600">Testimonials</span>
              </span>
            </Heading>
          </div>

          <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
            Build credibility and convert more customers.{" "}
          </p>
          <p className="mx-auto max-w-[600px]">
            Take full control of your brand&apos;s reputation with ready-made,
            optimized review components. Just copy and paste to easily display
            impactful reviews on your website.
          </p>

          <div className="w-full max-w-80">
            <Link href="/sign-up">
              <Button className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                Start For Free Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center justify-center mt-6 gap-x-1">
              <Star className="text-yellow-400 fill-current" />
              <Star className="text-yellow-400 fill-current" />
              <Star className="text-yellow-400 fill-current" />
              <Star className="text-yellow-400 fill-current" />
              <Star className="text-yellow-400 fill-current" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
