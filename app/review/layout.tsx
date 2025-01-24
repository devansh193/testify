interface ZLayoutProps {
  children: React.ReactNode;
}

const UserLayout = ({ children }: ZLayoutProps) => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col w-full lg:pl-[264px]">
        <div className="fixed top-0 right-0 left-0 lg:left-[264px] z-10">
          {/* <Navbar /> */}
        </div>
        <main className="flex-1 bg-blue-700 mt-[64px]">{children}</main>
      </div>
    </div>
  );
};
export default UserLayout;
