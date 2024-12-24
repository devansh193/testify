import { Button } from "@/components/ui/button";
import { Copy, Edit, Link } from "lucide-react";

const mockData = [
  {
    label: "Feedback Hub",
    description:
      "A centralized platform to gather and analyze user feedback effortlessly.",
    testimonials: 245,
    averageRating: "4.7",
  },
  {
    label: "Review Vault",
    description:
      "Store and showcase all your product reviews in one secure location.",
    testimonials: 178,
    averageRating: "4.5",
  },
  {
    label: "Opinion Tracker",
    description:
      "Track customer opinions and insights to improve your business strategy.",
    testimonials: 92,
    averageRating: "4.3",
  },
  {
    label: "Testimonial Tracker",
    description:
      "Organize and display user testimonials to enhance your product's credibility.",
    testimonials: 89,
    averageRating: "4.4",
  },
  {
    label: "Feedback Analyzer",
    description:
      "Advanced analytics to uncover trends and insights from user feedback.",
    testimonials: 230,
    averageRating: "4.5",
  },
  {
    label: "Customer Voice",
    description:
      "Empower your customers to voice their opinions and drive meaningful change.",
    testimonials: 187,
    averageRating: "4.6",
  },
  {
    label: "User Stories",
    description:
      "Collect real user stories to showcase authentic experiences with your brand.",
    testimonials: 134,
    averageRating: "4.3",
  },
];

export const BoardContent = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 md:mx-4">
      {mockData.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-start border px-4 py-2 rounded-xl bg-[#FFFFFF] gap-y-4 hover:scale-105 transition-transform duration-200 hover:shadow-md"
        >
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
              <h1 className="font-sans font-semibold text-xl">{item.label}</h1>
              <h1 className="flex items-center justify-center gap-x-2">
                <Edit className="size-4 hover:cursor-pointer" />
                <Copy className="size-4 hover:cursor-pointer" />
              </h1>
            </div>
            <p className="text-justify font-sans text-sm">{item.description}</p>
          </div>
          <div className="flex flex-col w-full gap-y-1">
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-sans font-medium">Testimonials</h1>
              <h1 className="text-sm font-sans font-semibold">
                {item.testimonials}
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-sans font-medium">Average rating</h1>
              <h1 className="text-sm font-sans font-semibold">
                {item.averageRating}
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center w-full gap-x-4 mt-2">
            <Button className="flex items-center justify-center w-full h-[45px] bg-neutral-800">
              <Link className="mr-2" />
              <h1>Copy link</h1>
            </Button>
            <Button variant={"outline"} className="w-full h-[45px]">
              View details
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
