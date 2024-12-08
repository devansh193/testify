import { ProductDetailSidebar } from "@/components/create-page/product-detail-sidebar";
import ProductDetails from "@/components/create-page/product-details";

export default function Create() {
  return (
    <div className="flex h-full">
      <div>
        <ProductDetailSidebar />
      </div>
      <div className="flex-1 items-center justify-center h-full ">
        <ProductDetails />
      </div>
    </div>
  );
}
