import { notFound } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { getProduct } from "@/action/products/product";
import { Logout } from "./logout";
import { Product } from "@prisma/client";
import Products from "./product";
import { authOptions } from "@/app/lib/auth";

interface ProductData {
  success: boolean;
  message?: string;
  products?: Product[];
}

const fetchProduct = async (userId: string): Promise<ProductData> => {
  if (!userId) {
    throw new Error("UserId not found. Please login");
  }
  const data = await getProduct({ userId });
  if (!data.success) {
    throw new Error(data.message || "Failed to fetch products.");
  }
  return data;
};

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="text-center p-4">
      <p>{message}</p>
      <p>
        If you think this is a mistake, please email{" "}
        <a
          href="mailto:supportTestify@gmail.com"
          className="text-blue-500 hover:underline"
        >
          supportTestify@gmail.com
        </a>
      </p>
      <p className="mt-4">Try logging in again:</p>
      <Logout />
    </div>
  );
};

export const MyProducts = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    return <ErrorMessage message="User not authenticated. Please log in." />;
  }
  let productData: ProductData;
  try {
    productData = await fetchProduct(userId);
  } catch (error) {
    if (error instanceof Error) {
      return <ErrorMessage message={error.message} />;
    }
    notFound();
  }
  const products = productData.products || [];

  if (products.length === 0) {
    return (
      <ErrorMessage message="Sorry, no products found associated with your account." />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Products products={products} />
    </div>
  );
};
