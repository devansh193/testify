const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      <div className="flex-grow overflow-auto">{children}</div>
    </div>
  );
};

export default CreateLayout;
