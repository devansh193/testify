// import { Navbar } from "@/components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <main className="">{children}</main>
    </div>
  );
};

export default DashboardLayout;
