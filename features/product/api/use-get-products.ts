import { getProduct } from "@/action/products/product";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = (userId: string) => {
  const query = useQuery({
    queryKey: ["products", userId],
    queryFn: async () => {
      const response = await getProduct({ userId });
      if (!response.success) {
        throw new Error("Failed to fetch products");
      }
      return response.products;
    },
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    enabled: !!userId,
  });

  return query;
};
