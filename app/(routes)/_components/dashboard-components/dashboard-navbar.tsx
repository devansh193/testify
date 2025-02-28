"use client";
import { Greeting } from "@/components/greeting";
import { MobileSidebar } from "@/components/mobile-sidebar";
import ProfileDropdown from "@/components/profile-menu/profile-dropdown";
import { Settings } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BoardNavbar } from "../board-components/board-navbar";
import { TestimonialNavbar } from "../testimonial-components/testimonial-navbar";

export const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  return (
    <nav className="h-16 border-b py-4 pl-2 pr-4 md:px-6 flex items-center justify-between bg-white z-50 gap-x-2">
      <div className="flex-col hidden lg:flex">
        <h1 className="font-medium">
          {" "}
          <Greeting /> {session?.user.name}
        </h1>
      </div>
      <MobileSidebar />
      <div className="flex items-center justify-center gap-x-4">
        <>
          {pathname ? pathname === "/boards" && <BoardNavbar /> : null}
          {pathname
            ? pathname === "/testimonials" && <TestimonialNavbar />
            : null}
        </>
        <div className="flex items-center justify-center gap-x-4">
          <Link href={"/settings"}>
            <Settings className="size-4" />
          </Link>
          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
};
