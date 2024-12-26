"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Link2, MessageSquare, Package2, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Boards",
    href: "/boards",
    icon: Package2,
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    icon: MessageSquare,
  },
  {
    title: "Share links",
    href: "/links",
    icon: Link2,
  },
];

const quickActions = [
  {
    title: "Add board",
    icon: Plus,
    href: "/create",
  },
];

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-sans text-md font-semibold my-2">Menu</h1>
        <nav className="flex flex-col items-start space-y-2">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "flex w-full items-center font-sans font-semibold  justify-start rounded-lg p-2 text-sm transition-all overflow-hidden hover:bg-white hover:border hover:shadow-md",
                  isActive
                    ? "bg-[#FFFFFF] text-neutral-700 border shadow-md font-bold"
                    : "text-neutral-500",
                  "group"
                )}
              >
                <item.icon className="mr-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:scale-110" />
                <span className="transition-all duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="font-sans text-md font-semibold my-2">Quick Actions</h1>
        <nav className="flex flex-col items-start space-y-2">
          {quickActions.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "flex w-full items-center font-sans font-semibold  justify-start rounded-lg p-2 text-sm transition-all overflow-hidden hover:bg-white hover:border hover:shadow-md text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                  isActive
                    ? "bg-[#FFFFFF] text-neutral-700 border shadow-md font-bold"
                    : "text-neutral-500",
                  "group"
                )}
              >
                <item.icon className="mr-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:scale-110" />
                <span className="transition-all duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
