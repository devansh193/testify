"use client";
import { cn } from "@/lib/utils";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { Copy, Check, CornerDownRight, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";

const products = [
  {
    title: "Testify",
    description: "A one stop solution for testimonials.",
    totalReviews: 4,
    link: "https://testify.xyz/john/testify",
    createdAt: "Dec 14",
  },
  {
    title: "Test",
    description: "A one stop solution for testimonials.",
    totalReviews: 4,
    link: "https://testify.xyz/john/testify",
    createdAt: "Dec 14",
  },
];

export const ProductCard = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (
    e: React.MouseEvent,
    link: string,
    index: number
  ) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(link);
      setCopiedIndex(index);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      {products.map((product, index) => (
        <div
          className={cn(
            "group flex items-center justify-between rounded-xl border p-4 hover:bg-muted/50 m-2 h-[120px] hover:shadow-md transition-all duration-200 w-full hover:cursor-pointer bg-white/80"
          )}
          key={product.title}
        >
          <div className="flex items-center gap-4">
            <div className="min-w-0 space-y-1">
              <div className="flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="font-bold cursor-pointer font-sans text-2xl">
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
                        onClick={(e) => handleCopy(e, product.link, index)}
                      >
                        {copiedIndex === index ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4 text-black" />
                        )}
                        <span className="sr-only">
                          {copiedIndex === index ? "Copied" : "Copy link"}
                        </span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {copiedIndex === index ? "Copied!" : "Copy short link"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center gap-x-2 truncate text-sm text-muted-foreground">
                <h1 className="flex line-clamp-1 hover:underline hover:underline-offset-2 hover:cursor-pointer">
                  <CornerDownRight className="size-3 mt-1 mr-1 text-[#9CA3AF]" />{" "}
                  {product.link}
                </h1>
                <div className="flex text-sm text-[#9CA3AF] text-muted-foreground">
                  {product.createdAt}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
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
