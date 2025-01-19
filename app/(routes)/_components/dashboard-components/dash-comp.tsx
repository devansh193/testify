import { LayoutDashboard } from "lucide-react";

export const DashComp = () => {
  return (
    <div className="col-span-1 flex flex-col p-6 rounded-lg bg-[#FFFFFF] shadow-md gap-y-2 transition-shadow duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <h1 className="font-sans font-medium text-md">Total Boards</h1>
        <div className="p-3 bg-blue-100 rounded-md">
          <LayoutDashboard className="size-4" color="blue" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-sans font-semibold">{45}</h1>
      </div>
      <div>
        <h1 className="text-sm text-[#17A34A]">+2 from last month</h1>
      </div>
    </div>
  );
};
