"use client";

import Link from "next/link";
import { useRecoilState } from "recoil";
import { sidebarAtom } from "@/recoil/atom";
import {
  BarChart2,
  Hourglass,
  LayoutDashboard,
  ListChecks,
  LogOut,
  Quote,
  Settings,
  Star,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { Avatar } from "./ui/avatar";

export const Sidebar = () => {
  const { data: session } = useSession();
  const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarAtom);

  return (
    <aside
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-[300px] border-r border-gray-200 bg-background transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col`}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b">
        <Link className="text-xl font-bold" href="#">
          <div className="flex items-center space-x-2">
            <Quote className="w-8 h-8" />
            <span className="text-2xl font-bold">testify</span>
          </div>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>
      <ScrollArea className="flex-grow px-4 py-6">
        <nav className="flex flex-col gap-4">
          <div>
            <h2 className="mb-2 text-xl font-semibold tracking-tight">
              Products
            </h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold tracking-tight">
              Reviews
            </h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <Star className="mr-2 h-4 w-4" />
                Reviews
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Hourglass className="mr-2 h-4 w-4" />
                Pending
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ListChecks className="mr-2 h-4 w-4" />
                Approved
              </Button>
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold tracking-tight">
              Analytics
            </h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <BarChart2 className="mr-2 h-4 w-4" />
                Overview
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <BarChart2 className="mr-2 h-4 w-4" />
                Product Performance
              </Button>
            </div>
          </div>
        </nav>
      </ScrollArea>
      <div className="mt-auto p-4 border-t">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start">
              {session?.user ? (
                <div className="flex items-center">
                  <Avatar className="bg-blue-200 flex items-center justify-center mr-2">
                    {session?.user?.name
                      ?.split(" ")
                      .map((word) => word.charAt(0))
                      .join("") || "G"}
                  </Avatar>
                  <span>{session?.user.name || "Guest"}</span>
                </div>
              ) : (
                ""
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
};
