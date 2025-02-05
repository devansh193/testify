"use client";

import Link from "next/link";
import { Text, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import XLogo from "@/assets/icons/x";
import PHLogo from "@/assets/icons/product-hunt";
import LILogo from "@/assets/icons/linkedin-logo";
import FBLogo from "@/assets/icons/facebook-logo";
import IGLogo from "@/assets/icons/instagram-icon";
import GLogo from "@/assets/icons/google-logo";
import RLogo from "@/assets/icons/reddit";

const routes = [
  {
    label: "Text",
    href: "/",
    icon: Text,
  },
  {
    label: "Video",
    href: "/boards",
    icon: Video,
  },
  {
    label: "Twitter/X",
    href: "/testimonials",
    icon: XLogo,
  },
  {
    label: "Product Hunt",
    href: "/links",
    icon: PHLogo,
  },
  {
    label: "Linkedin",
    href: "/links",
    icon: LILogo,
  },
  {
    label: "Reddit",
    href: "/links",
    icon: RLogo,
  },
  {
    label: "Google",
    href: "/links",
    icon: GLogo,
  },
  {
    label: "Facebook",
    href: "/links",
    icon: FBLogo,
  },
  {
    label: "Instagram",
    href: "/links",
    icon: IGLogo,
  },
];

export const ImportNavigation = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col p-4 space-y-1">
      <h1 className="font-semibold text-neutral-700 text-md mb-2">
        Import your testimonials
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
                  "h-6 w-6",
                  isActive ? "text-primary" : "text-black"
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
