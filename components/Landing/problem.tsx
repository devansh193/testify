import { Brain, Shield, Zap } from "lucide-react";

const data = [
  {
    label: "Data Overload",
    description:
      "Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation.",
    icon: Brain,
  },
  {
    label: "Slow Decision-Making",
    description:
      "Traditional data processing methods are too slow, causing businesses to lag behind market changes and miss crucial opportunities.",
    icon: Zap,
  },
  {
    label: "Data Security Concerns",
    description:
      "With increasing cyber threats, businesses worry about the safety of their sensitive information when adopting new technologies.",
    icon: Shield,
  },
];

export const Problem = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="flex flex-col items-center justify-center gap-y-4 text-center mb-16">
        <h2 className="text-blue-500  text-xs font-semibold uppercase tracking-wide">
          PROBLEM
        </h2>
        <h1 className="text-4xl font-medium text-black sm:text-5xl ">
          Manually managing your testimonials is a hassle.
        </h1>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div key={index} className="bg-transparent shadow-none border-none">
            <div className="pb-2">
              <div className="flex items-center space-x-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <div className="p-2    bg-neutral-800 rounded-full">
                    <item.icon className=" text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-black">
                  {item.label}
                </h3>
              </div>
            </div>
            <div className="w-[300px]">
              <p className="text-md text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
