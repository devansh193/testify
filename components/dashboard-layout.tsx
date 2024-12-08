import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import { Plus, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="sticky h-16 top-0 z-10 border-b bg-background py-4">
          <div className="flex items-center justify-between px-4">
            <h1 className="lg:ml-2 ml-10 mt-1 text-2xl font-semibold">
              Dashboard
            </h1>
            <div className="relative flex items-center gap-x-4">
              <div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search for product..."
                  className="pl-10 text-sm"
                />
              </div>
              <div>
                <Link href={"/products/create"}>
                  <Button>
                    <Plus /> Add product
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
