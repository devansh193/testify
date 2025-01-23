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
    <div className="top-0 fixed w-full z-40 bg-white bg-opacity-80 backdrop-blur-sm px-4">
      <div className="max-w-7xl mx-auto h-14 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Logo />
          <Testify className="text-black text-xl sm:text-2xl font-semibold" />
        </div>
        <div className="hidden lg:flex items-center gap-x-4 mr-4">
          <NavItems />
          <NavAuth />
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsSheetOpen(true)}
            className="text-black p-2 rounded-md hover:bg-gray-200 focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isSheetOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsSheetOpen(false)}
            className="absolute top-4 right-4 text-black p-2 rounded-full hover:bg-gray-200"
          >
            <X size={24} />
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
