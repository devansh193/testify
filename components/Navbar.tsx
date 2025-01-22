"use client";
import { useState } from "react";
import Testify from "./logo/testify";
import Logo from "./logo/Logo";
import { NavItems } from "./Landing/navbar-items/nav-items";
import { NavAuth } from "./Landing/navbar-items/nav-auth";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="bg-black fixed w-full z-50">
      <div className="bg-[#21201F] m-2 sm:m-6 mx-4 sm:mx-8 h-14 sm:h-20 rounded-xl flex items-center justify-between">
        <div className="flex items-end justify-center gap-x-2 ml-2 sm:ml-4">
          <Logo />
          <Testify className="text-white" />
        </div>
        <div className="hidden lg:block xl:pl-48">
          <NavItems />
        </div>
        <div className="hidden lg:block mr-2 sm:mr-4">
          <NavAuth />
        </div>
        <div className="lg:hidden flex items-center mr-2 sm:mr-4">
          <button
            onClick={() => setIsSheetOpen(true)}
            className="text-white p-2 rounded-md"
          >
            <Menu />
          </button>
        </div>
      </div>
      {isSheetOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsSheetOpen(false)}
            className="absolute top-4 right-4 text-white  p-2 rounded-full hover:bg-gray-700"
          >
            <X />
          </button>
          <div className="text-center text-white space-y-6">
            <NavItems />
            <NavAuth />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
