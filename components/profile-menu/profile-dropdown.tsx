"use client";

import Link from "next/link";
import { User, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logout } from "../logout";

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
        <button className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-neutral-800">
          <User color="white" className="size-3" />
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
          <Logout />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
