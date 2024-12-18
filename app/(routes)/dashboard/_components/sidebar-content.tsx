import Link from "next/link";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import Testify from "@/components/logo/testify";
import { Navigation } from "./sidebar-nav";
import ProfileDropdown from "@/components/profile-menu/profile-dropdown";

export const SidebarContent = () => {
  return (
    <div className="flex flex-col h-full p-2">
      <div className="px-2 pt-2 flex items-center justify-start p-2 gap-x-2">
        <Testify />
      </div>
      <div className="p-4 flex-grow">
        <Navigation />
      </div>
      <div className="flex flex-col p-4 gap-y-2">
        <Link
          href={"/settings"}
          className={cn(
            "flex w-full items-center justify-start rounded-lg p-2 text-black text-md font-sans font-medium transition-all overflow-hidden hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
            "group"
          )}
        >
          <Settings className="mr-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:rotate-[90deg]" />
          <span className="transition-all duration-300 ease-in-out transform group-hover:translate-x-1">
            Settings
          </span>
        </Link>
        <div className="">
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};
