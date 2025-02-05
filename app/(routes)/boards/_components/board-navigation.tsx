"use client";

import Link from "next/link";
import { Home, Link as Link3, MessageSquare, Package2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "All",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Text",
    href: "/boards",
    icon: Package2,
  },
  {
    label: "Video",
    href: "/testimonials",
    icon: MessageSquare,
  },
  {
    label: "Integrated",
    href: "/links",
    icon: Link3,
  },
];

export const BoardNavigation = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col p-4 space-y-1">
      <h1 className="font-semibold text-neutral-700 text-md mb-2">
        Manage your testimonials
      </h1>
      {routes.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link key={item.href} href={item.href}>
            <div
              className={cn(
                "flex items-center gap-x-3 px-3 p-2 font-medium rounded-lg text-sm transition-all overflow-hidden",
                "hover:bg-neutral-100 hover:shadow-md",
                isActive
                  ? "bg-white text-neutral-800 border border-neutral-200 shadow-md font-bold"
                  : "text-neutral-600"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5",
                  isActive ? "text-primary" : "text-neutral-500"
                )}
              />
              <span>{item.label}</span>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
