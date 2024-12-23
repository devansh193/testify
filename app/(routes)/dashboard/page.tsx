import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { Bell, Link, Plus, User2 } from "lucide-react";
import { DashboardNavbar } from "./_components/dashboard-navbar";
import { DashboardContent } from "./_components/dashboard-content";

export default function Dashboard() {
  return (
    <div className=" bg-white w-full min-h-screen shadow-lg">
      <DashboardNavbar />
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
