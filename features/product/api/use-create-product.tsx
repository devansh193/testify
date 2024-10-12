import { ResponseType, RequestType, Context } from "../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createProduct } from "@/action/product";
import { Loader } from "lucide-react";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType, Context>({
    onMutate: () => {
      const toastId = toast("Creating product...", {
        icon: <Loader className="animate-spin" />,
      });
      return { toastId };
    },
    mutationFn: async (data) => {
      const response = await createProduct(data);
      if (!response.success) {
        throw new Error(response.message);
      }
      return response;
    },
    onSuccess: (data, variables, context) => {
      toast.success("Product created successfully!", {
        id: context?.toastId,
        icon: "",
      });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error, variables, context) => {
      toast.error(`Failed to create product: ${error.message}`, {
        id: context?.toastId,
        icon: "",
      });
    },
  });

  return mutation;
};
