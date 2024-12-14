"use client";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { deleteProduct } from "@/action/products/product";

interface ProductsProp {
  products: Product[];
}

const Products = ({ products }: ProductsProp) => {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      const response = await deleteProduct({ productId: id });
      if (response?.message) {
        console.log("Product deleted successfully:", response.message);
      }
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => router.push(`/products/${product.id}`)}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Products;
