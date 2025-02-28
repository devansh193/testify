import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export const BoardHeader = () => {
  return (
    <div className="flex items-center justify-between my-4 mb-6">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold font-sans">Manage your Boards</h1>
        <p className="font-sans text-sm text-neutral-500 font-medium line-clamp-1">
          Manage your boards and collect testimonials.
        </p>
      </div>
      <div>
        <Link href={"/create"}>
          <Button className="bg-blue-700 hover:bg-blue-600 text-md rounded-xl">
            <Plus className="size-4 md:mr-2" />
            <h1 className="hidden md:block">Create New Board</h1>
          </Button>
        </Link>
      </div>
    </div>
  );
};
