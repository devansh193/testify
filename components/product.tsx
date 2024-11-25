"use client";
import { Product } from "@prisma/client";
// import { useRouter } from "next/navigation";
import ProductCard from "./product-card";

interface ProductsProp {
  products: Product[];
}

const Products = ({ products }: ProductsProp) => {
  //   const router = useRouter();
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
