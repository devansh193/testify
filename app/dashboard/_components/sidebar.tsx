import TestifyLogo from "@/components/Logo";
import ProfileDropdown from "@/components/profile-menu/profile-dropdown";

export const DashSidebar = () => {
  return (
    <div className="w-[250px] rounded-xl m-2 flex flex-col">
      <div className="px-2 pt-2 flex items-center justify-between p-2">
        <TestifyLogo />
        <ProfileDropdown />
      </div>
      <div className="p-4">this</div>
    </div>
  );
};
