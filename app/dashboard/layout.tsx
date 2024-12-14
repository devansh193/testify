import { DashSidebar } from "./_components/sidebar";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-blue-200 w-full h-screen flex">
      <DashSidebar />
      {children}
    </div>
  );
};

export default DashLayout;
