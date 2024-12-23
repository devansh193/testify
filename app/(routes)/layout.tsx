import { DashboardNavbar } from "./_components/dashboard-components/dashboard-navbar";
import { DashSidebar } from "./_components/dashboard-components/sidebar";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F5F5F5] flex min-h-screen">
      <div className="">
        <DashSidebar />
      </div>
      <div className="md:ml-[250px] w-full flex flex-col">
        <DashboardNavbar />
        {children}
      </div>
    </div>
  );
};

export default DashLayout;
