import ProfileDropdown from "@/components/profile-menu/profile-dropdown";
import { Button } from "@/components/ui/button";
import { Bell, Plus, User2 } from "lucide-react";
import Link from "next/link";

export const DashboardNavbar = () => {
  return (
    <div className="h-16 bg-white p-4 flex items-center justify-between border-b">
      <h1 className="text-2xl font-sans font-semibold">Testify</h1>
      <div className="flex items-center justify-center gap-x-6">
        <Link href={"/create"}>
          <Button variant={"outline"}>
            <Plus className="mr-2" />{" "}
            <h1 className="font-sans text-md">Add Board</h1>
          </Button>
        </Link>
        <Bell />
        {/* <div className="p-2 bg-neutral-200 ring-2 ring-neutral-300 rounded-full ">
          <User2 />
        </div> */}
        <ProfileDropdown />
      </div>
    </div>
  );
};
