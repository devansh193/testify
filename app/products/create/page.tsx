import PersonalPage from "@/components/create-page/personal-page/personal-page";
import { PersonalSidebar } from "@/components/create-page/personal-page/personal-page-sidebar";

export default function Create() {
  return (
    <div className="flex h-full">
      <div className="hidden lg:block">
        <PersonalSidebar />
      </div>
      <div className="flex-1 items-center justify-center h-full ">
        <PersonalPage />
      </div>
    </div>
  );
}
