import { Sidebar } from "./_components/dashboard-components/sidebar";
import { Navbar } from "./_components/dashboard-components/dashboard-navbar";

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex">
      <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full bg-black">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full lg:pl-[264px]">
        <div className="fixed top-0 right-0 left-0 lg:left-[264px] z-10">
          <Navbar />
        </div>
        <main className="flex-1 bg-blue-700 mt-[64px]">{children}</main>
      </div>
    </div>
  );
};

export default DashLayout;
