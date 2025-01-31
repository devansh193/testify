"use client";
import { UserNav } from "./_components/user-nav";

interface ZLayoutProps {
  children: React.ReactNode;
}

const UserLayout = ({ children }: ZLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 right-0 left-0 z-10 max-w-7xl mx-auto mt-4">
        <UserNav />
      </div>
      <main className="flex flex-1 items-center justify-center w-full">
        {children}
      </main>
    </div>
  );
};
export default UserLayout;
