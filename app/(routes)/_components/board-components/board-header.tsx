import { Button } from "@/components/ui/button";

export const BoardHeader = () => {
  return (
    <div className="flex items-center justify-between my-4 mb-6">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold font-sans">Manage your Boards</h1>
        <p className="font-sans text-sm text-neutral-500 font-medium">
          Manage your boards and collect testimonials.
        </p>
      </div>
      <div>
        <Button>Create boards</Button>
      </div>
    </div>
  );
};
