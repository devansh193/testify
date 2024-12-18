import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ProductCard } from "@/components/product/product-card";

export default function Dashboard() {
  return (
    <div className="my-2 bg-white w-full h-full rounded-xl p-4 shadow-lg">
      <MaxWidthWrapper>
        <div className="mt-6">
          <h1 className="text-3xl font-semibold font-sans">Products</h1>
          <div className="flex flex-col items-center justify-center mx-auto max-w-7xl">
            <ProductCard />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
