"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchProps {
  placeholder?: string;
}

export const BoardNavbar = ({
  placeholder = "Search board...",
}: SearchProps) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="w-full pl-9 pr-12 py-2"
          placeholder={placeholder}
          type="search"
          aria-label="Search"
        />
      </div>
    </div>
  );
};
