import { Greeting } from "@/components/greeting";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ProfileDropdown from "@/components/profile-menu/profile-dropdown";

export const NavAuth = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <div className="ml-8 space-x-8 flex items-center justify-center">
          <span className="text-sm flex gap-x-2 font-semibold text-gray-700">
            <Greeting />, <p>{session.user?.name}</p>{" "}
          </span>
          <ProfileDropdown />
        </div>
      ) : (
        <div className="flex flex-col ml-8 space-x-8 md:flex-row items-center justify-center">
          <Link
            href={"/sign-in"}
            className="font-sans font-medium text-lg hover:bg-white p-2 rounded-lg"
          >
            Login
          </Link>
          <Link href={"/sign-up"}>
            <Button className="font-sans font-medium text-md">
              Sign up free
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};
