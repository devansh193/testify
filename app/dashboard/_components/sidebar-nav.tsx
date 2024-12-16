"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Plus, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Reviews",
    href: "/reviews",
    icon: Star,
  },
  {
    title: "Create product",
    href: "/create",
    icon: Plus,
  },
];

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-start space-y-2">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "flex w-full items-center justify-start rounded-lg p-2 text-sm font-medium transition-all overflow-hidden hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
              isActive ? "bg-blue-100 text-blue-700" : "text-black",
              "group"
            )}
          >
            <item.icon className="mr-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:rotate-[90deg]" />
            <span className="transition-all duration-300 ease-in-out transform group-hover:translate-x-1">
              {item.title}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};
