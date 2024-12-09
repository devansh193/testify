import { CreateNav } from "@/components/create-page/create-navbar";

const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex flex-col h-screen
    "
    >
      <CreateNav />
      <div className="flex-grow overflow-auto">{children}</div>
    </div>
  );
};

export default CreateLayout;
