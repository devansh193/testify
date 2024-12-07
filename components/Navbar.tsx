"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { Greeting } from "./greeting";
import ProfileDropDown from "./profile-menu/profile-dropdown";

const navContent = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      {session ? (
        <div className="flex items-center space-x-4">
          <span className="text-sm flex gap-x-2 font-semibold text-gray-700">
            <Greeting />, <p>{session.user?.name}</p>
          </span>
          <ProfileDropDown />
        </div>
      ) : (
        <>
          {navContent.map((item) => (
            <Button variant="link" key={item.label} asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button variant="link" asChild>
            <button onClick={() => signIn()}>Sign in</button>
          </Button>
          <Button variant="default" asChild>
            <Link href="/sign-up">
              Get Started <ArrowRight className="ml-1.5 size-4" />{" "}
            </Link>
          </Button>
        </>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <MaxWidthWrapper>
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />
          <nav className="hidden md:flex md:items-center md:space-x-4">
            <NavItems />
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};
