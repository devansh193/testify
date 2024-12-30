import Link from "next/link";
import { LogOut, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navigation } from "./sidebar-nav";
import Testify from "@/components/logo/testify";
import { signOut } from "next-auth/react";
import Logo from "@/components/logo/Logo";
import { usePathname } from "next/navigation";
import BoardSidebarNavigation from "../board-components/board-sidebar-navigation";

export const SidebarContent = () => {
  const pathname = usePathname();
  const isProductDetail = /^\/boards\/[^/]+$/.test(pathname);

  return (
    <div className="flex flex-col h-full">
      <div className=" h-16 border-b p-2 flex items-center justify-start gap-x-2">
        <Logo className="text-white" />
        <Testify />
      </div>
      <div className="flex-grow p-2">
        {isProductDetail ? <BoardSidebarNavigation /> : <Navigation />}
      </div>
      <div className="flex flex-col gap-y-2 p-2">
        <Link
          href={"/settings"}
          className={cn(
            "flex w-full items-center justify-start rounded-lg p-2 text-black text-sm font-sans font-medium transition-all overflow-hidden hover:bg-white hover:border hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
            "group"
          )}
        >
          <Settings className="mr-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:scale-110" />
          <span className="transition-all duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110">
            Settings
          </span>
        </Link>
        <div className="">
          <button
            className={cn(
              "flex w-full items-center justify-start rounded-lg p-2 text-black text-sm font-sans font-medium transition-all overflow-hidden hover:bg-white hover:border hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
              "group"
            )}
            onClick={() => signOut()}
          >
            <LogOut className="mr-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:scale-110" />
            <span className="transition-all duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110">
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
