"use client";
import Link from "next/link";
import { Plus, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Import",
    icon: Plus,
    href: "/create",
  },
  {
    label: "Embed",
    icon: Workflow,
    href: "/create",
  },
];

export const BoardQuickActions = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col p-4 space-y-1">
      <h1 className="font-semibold text-neutral-700 text-md mb-2">
        Quick Actions
      </h1>
      {routes.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link key={item.href} href={item.href}>
            <div
              className={cn(
                "flex items-center gap-x-3 px-3 p-2 font-medium rounded-lg text-sm transition-all overflow-hidden",
                "hover:bg-neutral-100 hover:shadow-md",
                isActive
                  ? "bg-white text-neutral-800 border border-neutral-200 shadow-md font-bold"
                  : "text-neutral-600"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5",
                  isActive ? "text-primary" : "text-neutral-500"
                )}
              />
              <span>{item.label}</span>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
