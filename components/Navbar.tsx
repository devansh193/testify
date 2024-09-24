"use client";

import { Logo } from "@/components/Logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="fixed top-2 w-full h-14 px-4 shadow-sm flex items-center">
      <div className="md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
        <Logo name={true} />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          {status === "loading" ? (
            <p>Loading...</p>
          ) : session ? (
            <>
              <div className="flex items-center justify-between gap-x-4">
                {session.user?.name ? (
                  <p className="font-semibold text-white">
                    Welcome, {session.user?.name}
                  </p>
                ) : (
                  <p className="font-semibold text-white">Welcome back, {session.user?.email}</p>
                )}

                <Button
                  size={"sm"}
                  variant={"outline"}
                  className="bg-red-600 hover:bg-red-500 border-red-700 hover:text-white text-white font-semibold"
                  onClick={() => {
                    signOut({callbackUrl:"/"});
                  }}
                >
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <>
              <Button
                onClick={() => signIn()}
                size={"sm"}
                variant={"outline"}
                className="bg-blue-600 hover:bg-blue-500 border-blue-700 hover:text-white text-white font-semibold"
              >
                Login
              </Button>
              <Button
                size={"sm"}
                variant={"outline"}
                className="border-neutral-800 hover:bg-neutral-900 hover:text-white font-semibold"
                asChild
              >
                <Link href={"/sign-up"}>Get Testify for free</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
