import { cn } from "@/lib/utils";
import {
  FileText,
  Heart,
  Import,
  ImportIcon,
  List,
  Star,
  Video,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "All",
    href: "/",
    icon: List,
  },
  {
    title: "Written",
    href: "/written",
    icon: FileText,
  },
  {
    title: "Video",
    href: "/video",
    icon: Video,
  },
  {
    title: "Imported",
    href: "/imported",
    icon: Import,
  },
  {
    title: "Liked",
    href: "/liked",
    icon: Heart,
  },
];

const quickActions = [
  {
    title: "Import testimonials",
    icon: ImportIcon,
    href: "/import",
  },
];

const exports = [
  {
    title: "Wall of love",
    icon: Star,
    href: "/wall",
  },
  {
    title: "Single review",
    icon: Star,
    href: "/review",
  },
];

const BoardSidebarNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-sans text-md font-semibold my-2">Menu</h1>
        <nav className="flex flex-col items-start space-y-2">
          {items.map((item) => {
            const isActive =
              pathname === `/boards/1` && item.href === "/"
                ? true
                : pathname.includes(`/boards/1`) &&
                  pathname.endsWith(item.href);

            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "flex w-full items-center font-sans font-semibold justify-start rounded-lg p-2 text-sm overflow-hidden hover:bg-white hover:border hover:shadow-md transition-shadow",
                  isActive
                    ? "bg-[#FFFFFF] text-neutral-700 border font-bold shadow-md"
                    : "text-neutral-500",
                  "group"
                )}
              >
                <item.icon className="mr-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:scale-110" />
                <span className="transition-all duration-100 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="font-sans text-md font-semibold my-2">Quick Actions</h1>
        <nav className="flex flex-col items-start space-y-2">
          {quickActions.map((item) => {
            const isActive =
              pathname === `/boards/1` && item.href === "/"
                ? true
                : pathname.includes(`/boards/1`) &&
                  pathname.endsWith(item.href);

            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "flex w-full items-center font-sans font-semibold  justify-start rounded-lg p-2 text-sm transition-all overflow-hidden hover:bg-white hover:border hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                  isActive
                    ? "bg-[#FFFFFF] text-neutral-700 border font-bold shadow-md"
                    : "text-neutral-500",
                  "group"
                )}
              >
                <item.icon className="mr-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:scale-110" />
                <span className="transition-all duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="font-sans text-md font-semibold my-2">Exports</h1>
        <nav className="flex flex-col items-start space-y-2">
          {exports.map((item) => {
            const isActive =
              pathname === `/boards/1` && item.href === "/"
                ? true
                : pathname.includes(`/boards/1`) &&
                  pathname.endsWith(item.href);

            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "flex w-full items-center font-sans font-semibold  justify-start rounded-lg p-2 text-sm transition-all overflow-hidden hover:bg-white hover:border hover:shadow-md",
                  isActive
                    ? "bg-[#FFFFFF] text-neutral-700 border font-bold shadow-md"
                    : "text-neutral-500",
                  "group"
                )}
              >
                <item.icon className="mr-2 h-5 w-5 transition-all duration-200 ease-in-out group-hover:scale-110" />
                <span className="transition-all duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
export default BoardSidebarNavigation;
