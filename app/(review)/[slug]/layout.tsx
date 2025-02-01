"use client";
import { RecoilRoot } from "recoil";

interface ZLayoutProps {
  children: React.ReactNode;
}

const UserLayout = ({ children }: ZLayoutProps) => {
  return (
    <RecoilRoot>
      <div className="">
        <main className="flex items-center justify-center w-full">
          {children}
        </main>
      </div>
    </RecoilRoot>
  );
};
export default UserLayout;
