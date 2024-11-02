import { Check } from "lucide-react";
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
            <h1>Reviews in seconds.</h1>
            <Heading>
              <span>Collect and Showcase</span>
              <br />
              <span className="">
                Customer <span className="text-blue-600">Testimonials</span>
              </span>
            </Heading>
          </div>

          <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
            Build credibility and convert more customers.{" "}
          </p>

          <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
            {[
              "Build credibility and get social proof",
              "Buy once, use forever",
              "Track testimonials across multiple channels",
            ].map((item, index) => (
              <li key={index} className="flex gap-1.5 items-center text-left">
                <Check className="size-5 shrink-0 text-brand-700" />
                {item}
              </li>
            ))}
          </ul>

          <div className="w-full max-w-80">
            <Link href="/sign-up">
              <Button className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                Start For Free Today
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
