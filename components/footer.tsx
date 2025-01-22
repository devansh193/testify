"use client";
import { colFour, colOne, colThree, colTwo } from "@/constants/footer-items";
import Link from "next/link";
import TestifyLogo from "./logo/Logo";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className=" text-[#E7D6C9] z-50 mt-24 max-w-7xl w-full mx-auto">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-x-2 mb-4">
                <TestifyLogo />
                <span className="text-2xl font-bold text-black">testify</span>
              </div>
              <p className="text-sm text-[#64758B] mb-4">
                Empowering your platform, step by step.
              </p>
              <div className="flex space-x-4">
                <Link
                  href={colFour[0].href}
                  className="text-[#64758B] hover:text-neutral-900 transition"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href={colFour[1].href}
                  className="text-[#64758B] hover:text-neutral-900 transition"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href={colFour[2].href}
                  className="text-[#64758B] hover:text-neutral-900 transition"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href={colFour[3].href}
                  className="text-[#64758B] hover:text-neutral-900 transition"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h2 className="font-semibold text-black mb-4">Platform</h2>
              <ul className="space-y-2">
                {colOne.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[#64758B] hover:text-neutral-900 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-black mb-4">Company</h2>
              <ul className="space-y-2">
                {colTwo.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[#64758B] hover:text-neutral-900 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-black mb-4">Legal</h2>
              <ul className="space-y-2">
                {colThree.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[#64758B] hover:text-neutral-900 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="z-50">
        <Separator className="bg-[#F5F5F5]" />
        <div className="container mx-auto px-4 py-6 w-full">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Testify. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
