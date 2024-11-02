import React from "react";

export const Faq = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="flex justify-center">
        <div className="container px-4 md:px-6 w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
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
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
