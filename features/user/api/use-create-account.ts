import { createUser } from "@/action/user";
import { ResponseType, RequestType, Context } from "../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateAccount = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType, Context>({
    onMutate: () => {
      const toastId = toast.loading("Creating user...");
      return { toastId };
    },
    mutationFn: async (data) => {
      const response = await createUser(data.name, data.email, data.password);
      if (!response.success) {
        throw new Error(response.message);
      }
      return response;
    },
    onSuccess: (data, variables, context) => {
      toast.success("User created successfully!", {
        id: context?.toastId,
      });
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
    onError: (error, variables, context) => {
      toast.error(`Failed to create an account: ${error.message}`, {
        id: context?.toastId,
      });
    },
  });

  return mutation;
};
