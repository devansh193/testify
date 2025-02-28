import { Button } from "@/components/ui/button";
import { BoardResult } from "@/types";
import {
  EllipsisVertical,
  Loader,
  Pause,
  Pencil,
  Trash,
  User2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { useDeleteBoard } from "@/features/board/api/use-delete-board";
export const BoardCard = ({
  id,
  boardTitle,
  isActive,
  testimonialCount,
  createdAt,
}: BoardResult) => {
  const { mutate } = useDeleteBoard();

  const onDelete = (boardId: string) => {
    const toastId = toast.message("Deleting board...", {
      icon: <Loader className="animate-spin" />,
    });
    mutate(boardId, {
      onSuccess: (data) => {
        toast.success(data.message || "Board deleted successfully!", {
          icon: "",
          id: toastId,
        });
      },
      onError: (error) => {
        toast.error(error.message, {
          icon: "",
          id: toastId,
        });
      },
    });
  };
  return (
    <div
      key={id}
      className="flex border border-zinc-50 flex-col items-start p-4 rounded-xl bg-white gap-y-4 hover:cursor-pointer transition-shadow duration-300 shadow-sm hover:shadow-md"
    >
      <div className="flex flex-col w-full gap-y-2">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-sans font-semibold text-lg">{boardTitle}</h1>
          <div className="flex items-center justify-center gap-x-2">
            <h1
              className={`text-xs px-2 py-1 rounded-full  ${
                isActive
                  ? "bg-[#DCFCE7] text-[#1A803E]"
                  : "bg-[#FEE2E2] text-[#B91C1C]"
              }`}
            >
              {isActive ? "Active" : "Inactive"}
            </h1>
          </div>
        </div>
        <p className="text-left font-sans text-sm text-[#6B7280]">
          Created on {createdAt}
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center text-[#4B5563]">
          <User2 className="w-4 h-4 mr-2" />
          <h1 className="text-sm font-sans mr-1">{testimonialCount}</h1>
          <h1 className="text-sm font-sans">responses</h1>
        </div>
        <div className="flex items-center text-[#4B5563]">
          <Zap className="w-4 h-4 mr-2" />
          <h1 className="text-sm font-sans mr-1">{34}</h1>
          <h1 className="text-sm font-sans font-medium">Average rating</h1>
        </div>
      </div>
      <div className="flex items-center justify-between w-full gap-x-2">
        <Button
          variant={"ghost"}
          size={"lg"}
          className="flex-1 bg-white rounded-xl"
        >
          {isActive ? "Edit board" : "Continue editing"}
        </Button>
        {isActive ? (
          <Link href={`/boards/${id}`}>
            <Button
              variant={"ghost"}
              size={"lg"}
              className="flex-1 bg-white rounded-xl"
            >
              View details
            </Button>
          </Link>
        ) : (
          <Button
            variant={"ghost"}
            size={"lg"}
            className="flex-1 bg-[#2463EB] text-white rounded-xl hover:bg-blue-700 hover:text-white"
          >
            Publish
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <EllipsisVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Pause className="mr-2 h-4 w-4" />
              <span>Pause</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash className="mr-2 h-4 w-4" />
              <span onClick={() => onDelete(id)}>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
