import { DashSidebar } from "./_components/sidebar";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F5F5F5] h-screen flex">
      <DashSidebar />
      {children}
    </div>
  );
};

export default DashLayout;
