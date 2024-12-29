"use client";
import { colFour, colOne, colThree, colTwo } from "@/constants/footer-items";
import Link from "next/link";
import TestifyLogo from "./logo/Logo";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-[#E7D6C9] z-50 mt-24">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-x-2 mb-4">
              <TestifyLogo />
              <span className="text-2xl font-bold text-white">Testify</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering your platform, step by step.
            </p>
            <div className="flex space-x-4">
              <Link
                href={colFour[0].href}
                className="text-gray-400 hover:text-white transition"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href={colFour[1].href}
                className="text-gray-400 hover:text-white transition"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href={colFour[2].href}
                className="text-gray-400 hover:text-white transition"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href={colFour[3].href}
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h2 className="font-semibold text-white mb-4">Platform</h2>
            <ul className="space-y-2">
              {colOne.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-4">Company</h2>
            <ul className="space-y-2">
              {colTwo.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-4">Legal</h2>
            <ul className="space-y-2">
              {colThree.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-gray-400">
          © {currentYear} Testify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
