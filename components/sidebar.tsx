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
  Star,
  X,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProfileDropDown from "./profile-menu/profile-dropdown";
import TestifyLogo from "./Logo";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Star, label: "Reviews", href: "/dashboard/reviews" },
  { icon: Hourglass, label: "Pending", href: "/dashboard/pending" },
  { icon: ListChecks, label: "Approved", href: "/dashboard/approved" },
  { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
];

const Sidebar = () => {
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
        <div className="flex h-16 items-center justify-between px-4 border-b pt-2">
          <TestifyLogo />
        </div>
        <ScrollArea className="flex-grow px-4 py-6">
          <nav className="space-y-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={"link"}
                  className={`w-full justify-start my-1 ${
                    pathname === item.href ? "bg-neutral-300" : ""
                  }`}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <div className="mt-auto p-4 border-t">
          <ProfileDropDown />
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
