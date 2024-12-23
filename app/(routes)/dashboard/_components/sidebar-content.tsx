import Link from "next/link";
import { LogOut, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navigation } from "./sidebar-nav";
import Testify from "@/components/logo/testify";
import Logo from "@/components/logo/Logo";

export const SidebarContent = () => {
  return (
    <div className="flex flex-col h-full px-2">
      <div className="my-2">
        <Testify />
      </div>
      <div className="flex-grow">
        <Navigation />
      </div>
      <div className="flex flex-col gap-y-2">
        <Link
          href={"/settings"}
          className={cn(
            "flex w-full items-center justify-start rounded-lg p-2 text-black text-sm font-sans font-medium transition-all overflow-hidden hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
            "group"
          )}
        >
          <Settings className="mr-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:scale-110" />
          <span className="transition-all duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110">
            Settings
          </span>
        </Link>
        <div className="">
          <Link
            href={"/settings"}
            className={cn(
              "flex w-full items-center justify-start rounded-lg p-2 text-black text-sm font-sans font-medium transition-all overflow-hidden hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
              "group"
            )}
          >
            <LogOut className="mr-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:scale-110" />
            <span className="transition-all duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110">
              Logout
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
