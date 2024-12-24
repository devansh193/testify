"use client";
import { useState, useEffect } from "react";
import { PanelRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarContent } from "./sidebar-content";

export const DashSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (isDesktop) {
    return (
      <div className="hidden md:flex fixed top-0 left-0 w-[250px] h-full flex-col border-r border-neutral-200">
        <SidebarContent />
      </div>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" size="icon" className="fixed top-4 left-4 z-50">
          <PanelRight className="h-5 w-5" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
};
