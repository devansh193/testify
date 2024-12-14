import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ListFilter } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="m-2 bg-white w-full rounded-xl p-4">
      <MaxWidthWrapper>
        <h1 className="text-2xl font-semibold">Products</h1>
        <div className="flex items-center justify-between py-4">
          <div>
            <Button variant={"outline"}>
              <ListFilter className="size-4 mr-2" />
              Filter
            </Button>
          </div>
          <div className="flex items-center gap-x-2">
            <Input placeholder="Search..." />
            <Button>Create product</Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto max-w-7xl">
          <ProductCard />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
