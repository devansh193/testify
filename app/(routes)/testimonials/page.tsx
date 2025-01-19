import { TestimonialHeader } from "../_components/testimonial-components/testimonial-header";
import { TestimonialNavbar } from "../_components/testimonial-components/testimonial-navbar";
import TestimonialsContent from "../_components/testimonial-components/testomonial-content";

export default function Board() {
  return (
    <div className="bg-white w-full h-full shadow-lg">
      {/* Fixed Navbar */}
      <div className="">
        <TestimonialNavbar />
      </div>

      {/* Main Content */}
      <div className="m-4 mt-24">
        <TestimonialHeader />
        <div>
          <TestimonialsContent />
        </div>
      </div>
    </div>
  );
}
