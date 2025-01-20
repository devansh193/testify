import { TestimonialHeader } from "../_components/testimonial-components/testimonial-header";
import TestimonialsContent from "../_components/testimonial-components/testomonial-content";

export default function Board() {
  return (
    <div className="bg-white w-full h-full shadow-lg">
      <div className="p-4">
        <TestimonialHeader />
        <div>
          <TestimonialsContent />
        </div>
      </div>
    </div>
  );
}
