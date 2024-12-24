import Logo from "@/components/logo/Logo";
import Testify from "@/components/logo/testify";
import { cn } from "@/lib/utils";
import { LogOut, Settings } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import BoardSidebarNavigation from "./board-sidebar-navigation";

const BoardDetailSidebar = () => {
  return (
    <div className="flex flex-col h-full">
      <div className=" h-14 border-b p-2 flex items-center justify-start gap-x-2">
        <Logo />
        <Testify />
      </div>
      <div className="flex-grow p-2">
        <BoardSidebarNavigation />
      </div>
      <div className="flex flex-col gap-y-2 p-2">
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
          <button
            className={cn(
              "flex w-full items-center justify-start rounded-lg p-2 text-black text-sm font-sans font-medium transition-all overflow-hidden hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
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
export default BoardDetailSidebar;
