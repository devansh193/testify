import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export const BoardHeader = () => {
  return (
    <div className="flex items-center justify-between my-4 mb-6 mx-7">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold font-sans">Manage your Boards</h1>
        <p className="font-sans text-sm text-neutral-500 font-medium">
          Manage your boards and collect testimonials.
        </p>
      </div>
      <div>
        <Link href={"/create"}>
          <Button className="bg-[#2463EB] hover:bg-blue-700 text-md rounded-xl">
            <Plus className="size-4 mr-2" />
            Create New Board
          </Button>
        </Link>
      </div>
    </div>
  );
};
