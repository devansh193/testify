import { Brain, Shield, Zap } from "lucide-react";

const data = [
  {
    label: "No Trust, No Sales",
    description:
      "Without genuine testimonials, building customer trust feels like climbing a mountain without gear—impossible and exhausting.",
    icon: Brain,
  },
  {
    label: "Feedback Chaos Everywhere",
    description:
      "Organizing reviews is a nightmare when they're scattered across emails, chats, and DMs—chaos takes over, productivity suffers.",
    icon: Zap,
  },
  {
    label: "Embedding Headaches",
    description:
      "Showcasing testimonials on your website shouldn't feel like rocket science—it should be effortless, seamless, and done in seconds.",
    icon: Shield,
  },
];

export const Problem = () => {
  return (
    <section className="max-w-7xl mx-auto pb-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center gap-y-4 text-center mb-16">
        <h2 className="text-blue-500 text-sm font-semibold uppercase tracking-wide">
          PROBLEM
        </h2>
        <h1 className="text-3xl font-medium text-gray-900 sm:text-4xl md:text-5xl">
          Manually managing your testimonials is a hassle.
        </h1>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.label}
              </h3>
            </div>
            <p className="text-base text-gray-500 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
