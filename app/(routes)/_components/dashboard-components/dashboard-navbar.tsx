"use client";
import { Greeting } from "@/components/greeting";
import ProfileDropdown from "@/components/profile-menu/profile-dropdown";
import { Bell, Settings } from "lucide-react";
import { useSession } from "next-auth/react";

export const DashboardNavbar = () => {
  const { data: session } = useSession();
  return (
    <div className="h-16 bg-white p-4 flex items-center md:justify-between justify-end border-b">
      <h1 className="hidden md:flex text-2xl font-sans font-semibold p-4">
        <Greeting />
        <span className="ml-1">{session?.user.name}</span>
      </h1>
      <div className="flex items-center justify-center gap-x-6">
        <h1 className="hover:scale-125 transition-transform duration-150">
          <Settings className="size-4" />
        </h1>
        <h1 className="hover:scale-125 transition-transform duration-150">
          <Bell className="size-4" />
        </h1>
        <ProfileDropdown />
      </div>
    </div>
  );
};
