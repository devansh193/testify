const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-[#F5F5F5]">
      <div className="">{children}</div>
    </div>
  );
};

export default CreateLayout;
