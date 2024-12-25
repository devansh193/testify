"use client";
import { Button } from "@/components/ui/button";
import { Copy, Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const mockData = [
  {
    id: 1,
    label: "Feedback Hub",
    description:
      "A centralized platform to gather and analyze user feedback effortlessly.",
    testimonials: 245,
    averageRating: "4.7",
  },
  {
    id: 2,
    label: "Opinion Tracker",
    description:
      "Track customer opinions and insights to improve your business strategy.",
    testimonials: 92,
    averageRating: "4.3",
  },
  {
    id: 3,
    label: "Testimonial Tracker",
    description:
      "Organize and display user testimonials to enhance your product's credibility.",
    testimonials: 89,
    averageRating: "4.4",
  },
  {
    id: 4,
    label: "Feedback Analyzer",
    description:
      "Advanced analytics to uncover trends and insights from user feedback.",
    testimonials: 230,
    averageRating: "4.5",
  },
  {
    id: 5,
    label: "Customer Voice",
    description:
      "Empower your customers to voice their opinions and drive meaningful change.",
    testimonials: 187,
    averageRating: "4.6",
  },
  {
    id: 6,
    label: "User Stories",
    description:
      "Collect real user stories to showcase authentic experiences with your brand.",
    testimonials: 134,
    averageRating: "4.3",
  },
];

export const BoardContent = () => {
  const router = useRouter();
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 mx-6">
        {mockData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start px-4 py-2 rounded-xl bg-white gap-y-4 transition-shadow duration-300 hover:shadow-xl shadow-md"
          >
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center justify-between">
                <h1 className="font-sans font-semibold text-xl">
                  {item.label}
                </h1>
                <h1 className="flex items-center justify-center gap-x-2">
                  <Copy
                    className="size-4 hover:cursor-pointer hover:scale-110 transition-transform duration-150"
                    color="blue"
                  />

                  <Edit
                    className="size-4 hover:cursor-pointer hover:scale-110 transition-transform duration-150"
                    color="green"
                  />

                  <Trash2
                    className="size-4 hover:cursor-pointer hover:scale-110 transition-transform duration-150"
                    color="red"
                  />
                </h1>
              </div>
              <p className="text-left font-sans text-sm">{item.description}</p>
            </div>
            <div className="flex flex-col w-full gap-y-1">
              <div className="flex items-center justify-between">
                <h1 className="text-md font-sans font-medium">Testimonials</h1>
                <h1 className="text-xl font-sans font-semibold">
                  {item.testimonials}
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-md font-sans font-medium">
                  Average rating
                </h1>
                <h1 className="text-xl font-sans font-semibold">
                  {item.averageRating}
                </h1>
              </div>
            </div>
            <div className="flex items-start justify-start gap-x-4 mt-2">
              <Button
                variant={"default"}
                className="rounded-lg  bg-neutral-800"
                onClick={() => router.push(`/boards/${item.id}`)}
              >
                View details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
