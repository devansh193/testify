"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export const Logout = () => {
  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      id="navbar-default"
      onClick={() => {
        signOut();
      }}
    >
      <span
        className={`flex items-center gap-2 text-base transition-all duration-300 hover:text-red-500`}
      >
        <LogOut className="size-4" />
        Logout
      </span>
    </Button>
  );
};
