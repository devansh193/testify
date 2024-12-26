import ProfileDropdown from "@/components/profile-menu/profile-dropdown";
import { Bell, Search, Settings } from "lucide-react";

export const BoardNavbar = () => {
  return (
    <div className="h-16 bg-[#FAFAF8] p-4 flex items-center md:justify-between justify-end border-b">
      <h1 className="hidden md:flex ">
        <p className="font-sans md:text-2xl text- font-semibold">Boards</p>
      </h1>
      <div className="flex items-center justify-center gap-x-6">
        <div className="m-2 flex items-center justify-center pl-2 rounded-lg border-2 border-neutral-200">
          <Search className="text-[#414651] font-normal mr-2" />
          <input
            className="bg-[#FAFAF8] w-full  md:w-[400px] p-2 focus:ring-2 focus:ring-neutral-300 placeholder:text-[#414651]"
            placeholder="Search board..."
          />
        </div>
        <div className="flex items-center justify-center gap-x-6">
          <div className="flex items-center justify-center gap-x-4">
            <h1 className="hover:scale-125 transition-transform duration-150">
              <Settings className="size-4" />
            </h1>
            <h1 className="hover:scale-125 transition-transform duration-150">
              <Bell className="size-4" />
            </h1>
          </div>
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};
