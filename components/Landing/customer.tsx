"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    image: "/placeholder.svg?height=100&width=100",
    text: "Testify has revolutionized how we collect and showcase customer testimonials. It's incredibly easy to use and has significantly boosted our conversion rates.",
  },
  {
    name: "Michael Chen",
    company: "GrowthStartup",
    image: "/placeholder.svg?height=100&width=100",
    text: "Since implementing Testify, we've seen a 30% increase in customer trust. The customizable design fits perfectly with our brand identity.",
  },
  {
    name: "Emily Rodriguez",
    company: "E-commerce Solutions",
    image: "/placeholder.svg?height=100&width=100",
    text: "The analytics provided by Testify have been invaluable. We can now make data-driven decisions about which testimonials to highlight.",
  },
];

export const Customer = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  return (
    <div className="flex items-center justify-center bg-gray-50"> {/* Ensure full height and center content */}
      <div className="w-full max-w-3xl"> {/* Full width with max width constraint */}
        <section className="py-12 md:py-24 lg:py-32">
          <h2 className="text-2xl font-bold text-center mb-8">
            What Our Customers Say
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              {/* Uncomment this to display the image */}
              {/* <Image
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                /> */}
              <div>
                <h3 className="font-bold">
                  {testimonials[activeTestimonial].name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonials[activeTestimonial].company}
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {testimonials[activeTestimonial].text}
            </p>
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeTestimonial
                      ? "bg-gray-800"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
