import { DashSidebar } from "./_components/sidebar";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F5F5F5] flex h-screen">
      <div className="">
        <DashSidebar />
      </div>
      <div className="md:ml-[350px] w-full">{children}</div>
    </div>
  );
};

export default DashLayout;
