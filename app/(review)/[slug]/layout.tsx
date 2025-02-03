"use client";
import { RecoilRoot } from "recoil";

interface ZLayoutProps {
  children: React.ReactNode;
}

const UserLayout = ({ children }: ZLayoutProps) => {
  return (
    <RecoilRoot>
      <main className="flex items-center justify-center w-full">
        {children}
      </main>
    </RecoilRoot>
  );
};
export default UserLayout;
