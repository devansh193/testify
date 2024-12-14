import ProfileDropdown from "@/components/profile-menu/profile-dropdown";
import { Navigation } from "./sidebar-nav";
import Testify from "@/components/logo/testify";

export const DashSidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-[250px] h-full flex-col p-2 hidden md:flex">
      <div className="px-2 pt-2 flex items-center justify-between p-2">
        <Testify />
        <ProfileDropdown />
      </div>
      <div className="p-4">
        <Navigation />
      </div>
    </div>
  );
};
