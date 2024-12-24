"use client";
import { DashboardContent } from "../_components/dashboard-components/dashboard-content";
import { DashboardNavbar } from "../_components/dashboard-components/dashboard-navbar";
import { Header } from "../_components/dashboard-components/header";
export default function Dashboard() {
  return (
    <div className=" bg-[#FAFAF8] w-full h-full shadow-lg">
      <div>
        <DashboardNavbar />
      </div>
      <div className="m-4">
        <Header />
        <div>
          <DashboardContent />
        </div>
      </div>
    </div>
  );
}
