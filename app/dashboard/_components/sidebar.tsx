import ProfileDropdown from "@/components/profile-menu/profile-dropdown";
import { Navigation } from "./sidebar-nav";
import Testify from "@/components/logo/testify";
import { Settings } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const DashSidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-[250px] h-full flex-col p-2 flex">
      <div className="px-2 pt-2 flex items-center justify-between p-2">
        <Testify />
        <ProfileDropdown />
      </div>
      <div className="p-4">
        <Navigation />
      </div>
      <div className="p-4 mt-auto">
        <Link
          href={"/settings"}
          className={cn(
            "flex w-full items-center justify-start rounded-lg p-2 text-black text-sm font-medium transition-all overflow-hidden hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
            "group"
          )}
        >
          <Settings className="mr-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:rotate-[90deg]" />
          <span className="transition-all duration-300 ease-in-out transform group-hover:translate-x-1">
            Settings
          </span>
        </Link>
      </div>
    </div>
  );
};
