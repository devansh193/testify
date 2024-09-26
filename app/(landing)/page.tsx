"use client";
import { Advert } from "@/components/Landing/advert";
import { Customer } from "@/components/Landing/customer";
import { Faq } from "@/components/Landing/faq";
import { Main } from "@/components/Landing/main";
import { Work } from "@/components/Landing/work";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Main />
      <Work />
      <Customer />
      <Advert />
      <Faq />
    </div>
  );
}
