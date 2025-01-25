"use client";
import { UserNav } from "./_components/user-nav";

interface ZLayoutProps {
  children: React.ReactNode;
}

const UserLayout = ({ children }: ZLayoutProps) => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col w-full">
        <div className="fixed top-0 right-0 left-0 z-10 max-w-7xl mx-auto mt-4">
          <UserNav title={"TESTIFY"} />
        </div>
        <main className="h-full w-full flex items-center justify-center mt-[64px]">
          {children}
        </main>
      </div>
    </div>
  );
};
export default UserLayout;
