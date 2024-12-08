import TestifyLogo from "@/components/Logo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <div className="h-14 flex border-b-2 border-gray-200 flex-shrink-0">
        <div className="hidden lg:flex w-[400px] items-center pl-4 border-r-2 border-gray-200">
          <TestifyLogo />
        </div>
        <div className="flex items-center pl-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>Product</BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Create</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex-grow overflow-auto">{children}</div>
    </div>
  );
};

export default CreateLayout;
