"use client";
import { usePathname } from "next/navigation";
import { Navigation } from "./sidebar-nav";
import { QuickActions } from "@/components/Quickaction";
import Logo from "@/components/logo/Logo";
import Testify from "@/components/logo/testify";
import { Separator } from "@/components/ui/separator";
import { BoardNavigation } from "../../boards/_components/board-navigation";
import { BoardQuickActions } from "../../boards/_components/board-quick-action";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-full bg-neutral-100 py-2 w-full border-r-2">
      <div className="h-14 px-2 flex items-center border-b gap-x-4">
        <Logo />
        <Testify />
      </div>
      {pathname.startsWith("/boards/") ? <BoardNavigation /> : <Navigation />}
      <div className="px-4">
        <Separator />
      </div>
      {pathname.startsWith("/boards/") ? (
        <BoardQuickActions />
      ) : (
        <QuickActions />
      )}
    </aside>
  );
};
