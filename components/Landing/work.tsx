import { ArrowRight, CheckCircle, Star } from "lucide-react";

export const Work = () => {
  const steps = [
    {
      icon: <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-500" />,
      title: "1. Easy Setup",
      description:
        "Create your testimonial page in just a few clicks. Customize the design to match your brand.",
    },
    {
      icon: <Star className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400" />,
      title: "2. Collect Testimonials",
      description:
        "Share your unique URL with customers. They can easily submit their testimonials through a user-friendly form.",
    },
    {
      icon: <ArrowRight className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500" />,
      title: "3. Showcase & Convert",
      description:
        "Display your testimonials on your website. Use our analytics to optimize and increase conversions.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          How Testify Works
        </h2>
        <div className="grid gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="bg-gray-100 p-3 rounded-full">{step.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-500 max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
