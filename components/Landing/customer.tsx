"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          What Our Customers Say
        </h2>
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6 sm:p-8 md:p-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
              <Avatar className="w-16 h-16 sm:w-20 sm:h-20">
                <AvatarImage
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                />
                <AvatarFallback>
                  {testimonials[activeTestimonial].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-lg sm:text-xl">
                  {testimonials[activeTestimonial].name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonials[activeTestimonial].company}
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-base sm:text-lg mb-6 text-center sm:text-left">
              `{testimonials[activeTestimonial].text}`
            </p>
            <div className="flex justify-between items-center">
              <Button variant="outline" size="icon" onClick={prevTestimonial}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeTestimonial ? "bg-primary" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={nextTestimonial}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
