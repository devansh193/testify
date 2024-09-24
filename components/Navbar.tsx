"use client";

import { Logo } from "@/components/Logo";
// import { Button } from "./ui/button";
import Link from "next/link";
// import { useSession } from "next-auth/react";

export const Navbar = () => {
  // const { data: session, status } = useSession();

  return (
    <header className="px-4 lg:px-6 h-16 bg-[#FFFFFF] flex items-center border-b border-gray-200">
      <Logo name={true}/>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-gray-900 transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-gray-900 transition-colors" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-gray-900 transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-gray-900 transition-colors" href="#">
            Sign In
          </Link>
        </nav>
        {/* <Button
          className="ml-auto md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button> */}
      </header>
  );
};
