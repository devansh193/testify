import { createTestimonial } from "@/action/testimonials";
import { TestimonialType } from "@/schema";
import { ServerActionReturnType } from "@/types/api.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTestimonial = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ServerActionReturnType, Error, TestimonialType>({
    mutationFn: async (data) => {
      const response = await createTestimonial(data);
      if (!response.status) {
        throw new Error(response.message);
      }
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
    onError: (error) => {
      console.error("Error creating testimonial:", error.message);
    },
  });
  return mutation;
};
