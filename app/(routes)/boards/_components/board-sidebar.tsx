import Logo from "@/components/logo/Logo";
import Testify from "@/components/logo/testify";
import { Separator } from "@/components/ui/separator";
import { BoardNavigation } from "./board-navigation";
import { BoardQuickActions } from "./board-quick-action";

export const BoardSidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 py-2 w-full border-r-2">
      <div className="h-14 px-2 flex items-center border-b gap-x-4">
        <Logo />
        <Testify />
      </div>
      <BoardNavigation />
      <div className="px-4">
        <Separator />
      </div>
      <BoardQuickActions />
    </aside>
  );
};
