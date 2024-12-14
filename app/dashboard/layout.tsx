import { DashSidebar } from "./_components/sidebar";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F5F5F5] flex">
      <DashSidebar />
      <div className="ml-[250px] w-full">{children}</div>
    </div>
  );
};

export default DashLayout;
