import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const TestimonialHeader = () => {
  return (
    <div className="flex items-center justify-between my-4 mb-6 mx-7">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold font-sans">
          Manage your Testimonials
        </h1>
        <p className="font-sans text-sm text-neutral-500 font-medium">
          Manage you testimonials as you love.
        </p>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="flex items-center justify-between w-[200px] rounded-lg px-4 py-2"
              variant={"outline"}
              size={"lg"}
            >
              <h1 className="font-sans text-md">All boards</h1>
              <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>My Boards</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span>Testify</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <span>ViewUs</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <span>100xDevs</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <span>100xSchool</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <span>Apple</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
