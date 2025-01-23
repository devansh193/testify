"use client";
import { Advert } from "@/components/Landing/advert";
import { Faq } from "@/components/Landing/faq";
import { Main } from "@/components/Landing/main";
import { Problem } from "@/components/Landing/problem";
import { Solution } from "@/components/Landing/solution";
import { Ready } from "@/components/Landing/ready";
import HowItWork from "@/components/Landing/work";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-8 sm:pt-16 text-white gap-y-2">
      <Main />
      <Advert />
      <Problem />
      <Solution />
      <HowItWork />
      <Faq />
      <Ready />
    </div>
  );
}
