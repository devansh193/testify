"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Testify from "./logo/testify";
import { NavItems } from "./Landing/navbar-items/nav-items";
import { NavAuth } from "./Landing/navbar-items/nav-auth";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-gray-200 bg-[#F5F5F5] backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-4">
        <nav className="hidden md:flex md:items-center justify-between md:space-x-12">
          <Testify />
          <NavItems />
        </nav>
        <div className="hidden md:block">
          <NavAuth />
        </div>

        <div className="flex md:hidden items-center justify-between w-full">
          <Testify />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] flex flex-col"
            >
              <NavItems />
              <NavAuth />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
