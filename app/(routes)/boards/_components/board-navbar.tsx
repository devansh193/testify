"use client";
import { Greeting } from "@/components/greeting";
import ProfileDropdown from "@/components/profile-menu/profile-dropdown";
import { Settings } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { BoardMobileSidebar } from "./board-mobile-sidebar";

export const BoardNavbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="h-16 border-b py-4 px-6 flex items-center justify-between bg-white z-50">
      <div className="flex-col hidden lg:flex">
        <h1 className="font-medium">
          {" "}
          <Greeting /> {session?.user.name}
        </h1>
      </div>
      <BoardMobileSidebar />
      <div className="flex items-center justify-center gap-x-4">
        <div className="flex items-center justify-center gap-x-4">
          <Link href={"/settings"}>
            <Settings className="size-4" />
          </Link>
          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
};
