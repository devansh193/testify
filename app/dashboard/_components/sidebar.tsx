import ProfileDropdown from "@/components/profile-menu/profile-dropdown";

export const DashSidebar = () => {
  return (
    <div className="w-[250px] bg-teal-200 rounded-xl m-2 flex flex-col justify-between">
      <div className="p-4">
        <h1 className="text-lg text-black">Side bar this is</h1>
      </div>
      <div className="p-4">
        <ProfileDropdown />
      </div>
    </div>
  );
};
