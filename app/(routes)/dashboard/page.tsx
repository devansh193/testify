"use client";
import { DashboardContent } from "../_components/dashboard-components/dashboard-content";
import { DashboardNavbar } from "../_components/dashboard-components/dashboard-navbar";
import { DashboardHeader } from "../_components/dashboard-components/dashboard-header";
export default function Dashboard() {
  return (
    <div className=" bg-[#FAFAF8] w-full h-full shadow-lg">
      <div>
        <DashboardNavbar />
      </div>
      <div className="m-4">
        <DashboardHeader />
        <div>
          <DashboardContent />
        </div>
      </div>
    </div>
  );
}
