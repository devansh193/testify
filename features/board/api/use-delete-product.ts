// import {  Context } from "../types/types";
// import { deleteProduct } from "@/action/product";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "sonner";

// export const useDeleteProduct = () => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation({
//     onMutate: () => {
//       const toastId = toast("Deleting...", {});
//       return { toastId };
//     },
//     mutationFn: async (productId: string) => {
//       const response = await deleteProduct({ productId });
//       if (!response?.success) {
//         throw new Error(response?.message);
//       }
//       return response;
//     },
//     onSuccess: (Context) => {

//     }
//   });
// };
