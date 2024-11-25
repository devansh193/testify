"use client";

import { signOut } from "next-auth/react";

import { LogOut } from "lucide-react";

export const Logout = () => {
  return (
    <span
      className={`flex items-center gap-2 text-base transition-all duration-300 hover:text-red-500`}
      onClick={() => signOut()}
    >
      <LogOut className="size-4" />
      Logout
    </span>
  );
};

<span
  className={`flex items-center gap-2 text-base transition-all duration-300 hover:text-red-500`}
>
  <LogOut className="size-4" />
  Logout
</span>;
