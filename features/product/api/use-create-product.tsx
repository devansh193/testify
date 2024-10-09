import { ResponseType, RequestType, Context } from "../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createProduct } from "@/action/product";
import { Loader2 } from "lucide-react";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType, Context>({
    onMutate: () => {
      const toastId = toast.message("Creating product", {
        icon: <Loader2 />,
      });
      return { toastId };
    },
    mutationFn: async (data) => {
      const response = await createProduct(
        data.title,
        data.description,
        data.showLogo,
        data.logoUrl,
        data.questions,
        data.userId
      );
      if (!response.success) {
        throw new Error(response.message);
      }
      return response;
    },
    onSuccess: (data, variables, context) => {
      toast.success("User created successfully!", {
        id: context?.toastId,
        icon: "",
      });
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
    onError: (error, variables, context) => {
      toast.error(`Failed to create an account: ${error.message}`, {
        id: context?.toastId,
      });
    },
  });

  return mutation;
};
