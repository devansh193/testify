import Logo from "@/components/logo/Logo";
import Testify from "@/components/logo/testify";
import { ImportNavigation } from "./import-navigagtion";

export const ImportSidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 py-2 w-full border-r-2">
      <div className="h-14 px-2 flex items-center border-b gap-x-4">
        <Logo />
        <Testify />
      </div>
      <ImportNavigation />
    </aside>
  );
};
