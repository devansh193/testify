"use client";

import Link from "next/link";
import { User, LogOut, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
const ProfileDropdown = () => {
  const menuItemLinks = [
    {
      href: "/settings",
      icon: <Settings className="size-4" />,
      label: "Settings",
    },
  ];

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-zinc-600">
          <User color="white" className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[99999] m-2 min-w-44 bg-neutral-100 dark:bg-neutral-900">
        <DropdownMenuGroup>
          {menuItemLinks.map(({ href, label, icon }) => (
            <Link href={href} key={href}>
              <DropdownMenuItem className="flex gap-2 text-base">
                {icon}
                <span>{label}</span>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span
            className={`flex items-center gap-2 text-base transition-all duration-300 hover:text-red-500`}
          >
            <LogOut className="size-4" />
            Logout
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
