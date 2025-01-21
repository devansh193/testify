"use client";
import Link from "next/link";
import { Settings, User2 } from "lucide-react";
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
      <DropdownMenuTrigger asChild className="">
        <div className="size-10 bg-neutral-200 rounded-full flex items-center justify-center hover:cursor-pointer ">
          {session?.user ? (
            <h1 className="text-black text-sm font-semibold">
              {session.user.name
                ? session.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                : "U"}
            </h1>
          ) : (
            <User2 className="text-white" />
          )}
        </div>
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
