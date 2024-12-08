import { ProductDetailSidebar } from "@/components/create-page/product-detail-sidebar";
import ProductDetails from "@/components/create-page/product-details";

export default function Create() {
  return (
    <div className="flex">
      <ProductDetailSidebar />
      <ProductDetails />
    </div>
  );
}
