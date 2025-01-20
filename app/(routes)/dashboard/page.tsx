"use client";
import { DashboardContent } from "../_components/dashboard-components/dashboard-content";
import { DashboardHeader } from "../_components/dashboard-components/dashboard-header";
export default function Dashboard() {
  return (
    <div className="bg-white w-full h-full shadow-lg flex flex-col">
      <div className="m-4 p-4 flex-1 flex flex-col max-h-full">
        <DashboardHeader />
        <DashboardContent />
      </div>
    </div>
  );
}
