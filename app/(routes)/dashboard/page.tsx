import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { DashboardNavbar } from "../_components/dashboard-components/dashboard-navbar";
import { DashboardContent } from "../_components/dashboard-components/dashboard-content";

export default function Dashboard() {
  return (
    <div className=" bg-white w-full h-full shadow-lg">
      <div className="m-4">
        <div className="flex items-center justify-between my-4">
          <h1 className="text-3xl font-semibold font-sans">Dashboard</h1>
          <Button variant={"outline"}>
            <Link className="mr-2" /> Copy link
          </Button>
        </div>
        <div>
          <DashboardContent />
        </div>
      </div>
    </div>
  );
}
