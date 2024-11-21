import { ArrowRight, Star } from "lucide-react";
import { Heading } from "../heading";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";

export function Main() {
  const { data: session } = useSession();
  const href = session ? "/dashboard" : "/sign-in";

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-24 lg:py-32 bg-brand-25 bg-gray-50">
      <MaxWidthWrapper className="text-center px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto text-center flex flex-col items-center gap-4 sm:gap-6">
          <div>
            <h1 className="text-xs sm:text-sm md:text-base mb-2 font-medium">
              Reviews in seconds.
            </h1>
            <Heading
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans leading-tight"
              style={{ fontFamily: "Helvetica" }}
            >
              <span className="block">Gather, Organize and Display</span>
              <span className="block mt-2">
                Quality Customer{" "}
                <span className="text-blue-600">Testimonials</span>
              </span>
            </Heading>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-prose text-center text-pretty">
            Build credibility and convert more customers.
          </p>
          <p className="mx-auto max-w-[600px] text-sm sm:text-base md:text-lg">
            Take full control of your brand&apos;s reputation with ready-made,
            optimized review components. Just copy and paste to easily display
            impactful reviews on your website.
          </p>

          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <Link href={href} className="block w-full">
              <Button className="relative z-10 h-12 sm:h-14 w-full text-sm sm:text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                Start For Free Today
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <div className="flex items-center justify-center mt-4 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
