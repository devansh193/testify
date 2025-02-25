"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can I customize the design of my testimonial page?",
    a: "Yes, Testify offers extensive customization options to match your brand identity.",
  },
  {
    q: "Is there a limit to how many testimonials I can collect?",
    a: "No, there's no limit. You can collect and showcase as many testimonials as you want.",
  },
  {
    q: "How does pricing work after the free trial?",
    a: "We offer flexible pricing plans based on your needs. You can view our pricing page for more details.",
  },
  {
    q: "Can I integrate Testify with my existing website?",
    a: "Testify provides easy integration options for most popular website platforms and content management systems.",
  },
  {
    q: "Is it possible to moderate testimonials before they're published?",
    a: "Yes, you have full control over which testimonials are displayed. You can review and approve testimonials before they go live.",
  },
  {
    q: "Do you offer support for video testimonials?",
    a: "Yes, Testify supports both text and video testimonials, allowing you to showcase diverse content from your customers.",
  },
  {
    q: "Can I export the testimonials I collect?",
    a: "You can export your testimonials in various formats for use in other marketing materials or analysis.",
  },
];

export const Faq = () => {
  return (
    <section className="w-full  md:py-24 lg:py-32 mt-8 mb-12 bg-white md:mt-0">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        <h2 className="text-blue-500 text-xs text-center font-semibold uppercase tracking-wide">
          FAQ
        </h2>
        <h2 className="text-4xl font-medium text-center mt-4 mb-8 text-black">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg py-1 px-8"
            >
              <AccordionTrigger className="text-left text-base font-medium text-black">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-700">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
