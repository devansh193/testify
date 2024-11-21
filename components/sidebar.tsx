"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  Menu,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Star, label: "Reviews", href: "/dashboard/reviews" },
  { icon: Hourglass, label: "Pending", href: "/dashboard/pending" },
  { icon: ListChecks, label: "Approved", href: "/dashboard/approved" },
  { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
];

const Sidebar = () => {
  const { data: session } = useSession();
  const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarAtom);
  const pathname = usePathname();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden"
      >
        {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <Link className="flex items-center space-x-2" href="/dashboard">
            <Quote className="w-8 h-8" />
            <span className="text-xl font-bold">testify</span>
          </Link>
        </div>
        <ScrollArea className="flex-grow px-4 py-6">
          <nav className="space-y-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <div className="mt-auto p-4 border-t">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start">
                {session?.user ? (
                  <div className="flex items-center">
                    <Avatar className="mr-2">
                      <AvatarImage src={session.user.image || undefined} />
                      <AvatarFallback>
                        {session.user.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="truncate">{session.user.name}</span>
                  </div>
                ) : (
                  "Menu"
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
    </>
  );
};
export default Sidebar;
