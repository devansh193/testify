import TestifyLogo from "@/components/Logo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const Product = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:block w-[400px] bg-blue-400 h-full">
        <div className="h-16 bg-gray-200 border-b border-gray-200 p-4">
          <TestifyLogo />
        </div>
        hi there i am sidebar.
      </div>
      <div className="bg-teal-400 w-full">
        <div className="h-16 flex items-center justify-between bg-gray-200 border-b border-gray-200 p-4 pt-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Link href="/products/create">
            <Button>
              <Plus className="mr-2" /> Create a product
            </Button>
          </Link>
        </div>
        hi there i am main content
      </div>
    </div>
  );
};
export default Product;
