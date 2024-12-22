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
import { useSession } from "next-auth/react";

const ProfileDropdown = () => {
  const { data: session } = useSession();
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
        <button className="group w-full flex items-center gap-2 px-6 py-3 cursor-pointer justify-center rounded-full bg-neutral-800 hover:scale-110 transition-transform duration-200">
          <User color="white" className="size-4" />
          <h1 className="text-white text-sm">{session?.user.name}</h1>
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
