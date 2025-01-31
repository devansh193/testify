import { UserTestimonialSchema } from "@/schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

const testimonialInputSchema = UserTestimonialSchema.pick({
  textReview: true,
  rating: true,
});

type testimonialInputSchemaType = z.infer<typeof testimonialInputSchema>;

export default function TestimonialForm() {
  const form = useForm<testimonialInputSchemaType>({
    resolver: zodResolver(testimonialInputSchema),
    defaultValues: {
      textReview: "",
      rating: 0,
    },
  });

  const onSubmit = (data: testimonialInputSchemaType) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <input {...form.register("textReview")} />
      <input {...form.register("rating")} />
      <button onClick={form.handleSubmit(onSubmit)}>Submit</button>
    </Form>
  );
}
