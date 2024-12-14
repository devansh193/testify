"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { Copy, CornerDownRight, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";

const products = [
  {
    title: "Testify-1",
    description: "A one stop solution for testimonials.",
    totalReviews: 4,
    link: " drive.google.com/file/d/1aOKtBX2W8QQt-KCJ3pdWYSAonl4sWo4_/view?usp=drive_link",
    createdAt: "Dec 14",
  },
  {
    title: "Testify-2",
    description: "A one stop solution for testimonials.",
    totalReviews: 4,
    link: " drive.google.com/file/d/1aOKtBX2W8QQt-KCJ3pdWYSAonl4sWo4_/view?usp=drive_link",
    createdAt: "Dec 14",
  },
  {
    title: "Testify-3",
    description: "A one stop solution for testimonials.",
    totalReviews: 4,
    link: " drive.google.com/file/d/1aOKtBX2W8QQt-KCJ3pdWYSAonl4sWo4_/view?usp=drive_link",
    createdAt: "Dec 14",
  },
];
export const ProductCard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(`dub.sh/`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      {products.map((product) => (
        <div
          className={cn(
            "group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50 m-2 h-[80px] hover:shadow-xl w-full"
          )}
          key={product.title}
        >
          <div className="flex items-center gap-4">
            <div className="relative h-8 w-8 shrink-0">
              <Image
                src={"/testie.png"}
                alt=""
                className="rounded-full"
                fill
                sizes="32px"
              />
            </div>
            <div className="min-w-0 space-y-1">
              <div className="flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="font-semibold cursor-pointer">
                        {product.title}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click to view stats</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground"
                        onClick={handleCopy}
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">
                          {copied ? "Copied" : "Copy link"}
                        </span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{copied ? "Copied!" : "Copy short link"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="truncate text-sm text-muted-foreground">
                <h1 className="flex hover:underline hover:underline-offset-2 hover:cursor-pointer">
                  <CornerDownRight className="size-3 mr-1 text-[#9CA3AF]" />{" "}
                  {product.link}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm tabular-nums text-muted-foreground">
              {product.totalReviews} review
              {product.totalReviews !== 1 ? "s" : ""}
            </div>
            <div className="text-sm text-muted-foreground">
              {product.createdAt}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 opacity-0 group-hover:opacity-100"
                >
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </>
  );
};
