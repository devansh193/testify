import { colFour, colOne, colThree, colTwo } from "@/constants/footer-items";
import Link from "next/link";
import Testify from "./logo/testify";
import TestifyLogo from "./logo/Logo";

export const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-evenly py-24 p-4 w-full bg-[#AECEDE]">
        <div className="flex items-center justify-center gap-x-2">
          <TestifyLogo />
          <Testify />
        </div>
        <div className="space-y-4">
          <h1 className="font-sans font-semibold text-sm">PLATFORM</h1>
          <div className="flex flex-col items-start gap-y-1">
            {colOne.map((item) => (
              <Link key={item.label} href={item.href}>
                <h1 className="relative inline-block before:absolute before:-bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-200 hover:before:w-full">
                  {item.label}
                </h1>
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="font-sans font-semibold text-sm">COMPANY</h1>
          <div className="flex flex-col items-start gap-y-1">
            {colTwo.map((item) => (
              <Link key={item.label} href={item.href}>
                <h1 className="relative inline-block before:absolute before:-bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-200 hover:before:w-full">
                  {item.label}
                </h1>
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="font-sans font-semibold text-sm">LEGAL</h1>
          <div className="flex flex-col items-start gap-y-1">
            {colThree.map((item) => (
              <Link key={item.label} href={item.href}>
                <h1 className="relative inline-block before:absolute before:-bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-200 hover:before:w-full">
                  {item.label}
                </h1>
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="font-sans font-semibold text-sm">SOCIALS</h1>
          <div className="flex flex-col items-start gap-y-1">
            {colFour.map((item) => (
              <Link key={item.label} href={item.href}>
                <h1 className="relative inline-block before:absolute before:-bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-200 hover:before:w-full">
                  {item.label}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 bg-[#AECEDE]">
        <p className="text-sm text-black font-sans text-center">
          © 2024 Testify. All rights reserved.
        </p>
      </div>
    </div>
  );
};
