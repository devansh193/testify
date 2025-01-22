import { Brain, Shield, Zap } from "lucide-react";

const data = [
  {
    label: "Data Overload",
    Description:
      "Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation.",
    icon: Brain,
  },
  {
    label: "Slow Decision-Making",
    Description:
      "Traditional data processing methods are too slow, causing businesses to lag behind market changes and miss crucial opportunities.",
    icon: Zap,
  },
  {
    label: "Data Security Concerns",
    Description:
      "With increasing cyber threats, businesses worry about the safety of their sensitive information when adopting new technologies.",
    icon: Shield,
  },
];

export const Problem = () => {
  return (
    <div className="max-w-7xl mx-auto mt-24">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <h1 className="text-[#4B5563] text-lg">PROBLEM</h1>
        <h1 className="text-white text-4xl font-medium mt-2">
          Manually managing your testimonials is a hassle.
        </h1>
        <div className="flex items-center justify-between gap-8 mt-20 overflow-x-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2 min-w-[250px] px-4"
            >
              <h2 className="text-2xl font-semibold text-white">
                {item.label}
              </h2>
              <p className="text-md text-neutral-200 text-wrap">
                {item.Description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
