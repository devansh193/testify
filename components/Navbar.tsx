"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { useSession, signOut } from "next-auth/react";

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

  return (
    <header className="px-4 lg:px-6 h-16 bg-[#FFFFFF] flex items-center border-b border-gray-200">
      <Logo />
      <nav className="ml-auto hidden md:flex">
        {navContent.map((item) => (
          <Button variant={"link"} key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
        {session ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">{session.user?.email}</span>
            <Button
              variant="secondary"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button variant={"link"}>
            <Link href={"/sign-in"}>Sign in</Link>
          </Button>
        )}
      </nav>
    </header>
  );
};
