import { DashSidebar } from "./_components/dashboard-components/sidebar";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F9FAFC] flex min-h-screen">
      <div className="">
        <DashSidebar />
      </div>
      <div className="md:ml-[250px] w-full flex flex-col">{children}</div>
    </div>
  );
};

export default DashLayout;
