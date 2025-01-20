"use client";
import { Button } from "@/components/ui/button";
import { useGetBoards } from "@/features/board/api/use-get-boards";
import { EllipsisVertical, User2, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

interface BoardItem {
  id: number;
  label: string;
  description: string;
  testimonials: number;
  averageRating: string;
  isActive?: boolean;
  createdAt: string;
}

const mockData: BoardItem[] = [
  {
    id: 1,
    label: "Feedback Hub",
    description:
      "A centralized platform to gather and analyze user feedback effortlessly.",
    testimonials: 245,
    averageRating: "4.7",
    isActive: true,
    createdAt: "July 15, 2023",
  },
  {
    id: 2,
    label: "Opinion Tracker",
    description:
      "Track customer opinions and insights to improve your business strategy.",
    testimonials: 92,
    averageRating: "4.3",
    isActive: true,
    createdAt: "July 15, 2023",
  },
  {
    id: 3,
    label: "Testimonial Tracker",
    description:
      "Organize and display user testimonials to enhance your product's credibility.",
    testimonials: 89,
    averageRating: "4.4",
    isActive: true,
    createdAt: "July 15, 2023",
  },
  {
    id: 4,
    label: "Feedback Analyzer",
    description:
      "Advanced analytics to uncover trends and insights from user feedback.",
    testimonials: 230,
    averageRating: "4.5",
    isActive: false,
    createdAt: "July 15, 2023",
  },
  {
    id: 5,
    label: "Customer Voice",
    description:
      "Empower your customers to voice their opinions and drive meaningful change.",
    testimonials: 187,
    averageRating: "4.6",
    isActive: false,
    createdAt: "July 15, 2023",
  },
  {
    id: 6,
    label: "User Stories",
    description:
      "Collect real user stories to showcase authentic experiences with your brand.",
    testimonials: 134,
    averageRating: "4.3",
    isActive: true,
    createdAt: "July 15, 2023",
  },
];

export const BoardContent = () => {
  const { data, isLoading, isError } = useGetBoards();
  const router = useRouter();
  return (
    <div className="p-4">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
        {mockData?.map((item) => (
          <div
            key={item.id}
            className="flex border border-zinc-50 flex-col items-start p-4 rounded-xl bg-white gap-y-4 hover:cursor-pointer transition-shadow duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex flex-col w-full gap-y-2">
              <div className="flex items-center justify-between w-full">
                <h1 className="font-sans font-semibold text-lg">
                  {item.label}
                </h1>
                <div className="flex items-center justify-center gap-x-2">
                  <h1
                    className={`text-xs px-2 py-1 rounded-full  ${
                      item.isActive
                        ? "bg-[#DCFCE7] text-[#1A803E]"
                        : "bg-[#FEE2E2] text-[#B91C1C]"
                    }`}
                  >
                    {item.isActive ? "Active" : "Inactive"}
                  </h1>
                </div>
              </div>
              <p className="text-left font-sans text-sm text-[#6B7280]">
                Created on {item.createdAt}
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center text-[#4B5563]">
                <User2 className="w-4 h-4 mr-2" />
                <h1 className="text-sm font-sans mr-1">{item.testimonials}</h1>
                <h1 className="text-sm font-sans">responses</h1>
              </div>
              <div className="flex items-center text-[#4B5563]">
                <Zap className="w-4 h-4 mr-2" />
                <h1 className="text-sm font-sans mr-1">{item.averageRating}</h1>
                <h1 className="text-sm font-sans font-medium">
                  Average rating
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-x-2">
              <Button
                variant={"ghost"}
                size={"lg"}
                className="flex-1 bg-white rounded-xl"
              >
                {item.isActive ? "Edit board" : "Continue editing"}
              </Button>
              {item.isActive ? (
                <Button
                  variant={"ghost"}
                  size={"lg"}
                  className="flex-1 bg-white rounded-xl"
                  onClick={() => router.push(`/boards/${item.id}`)}
                >
                  View details
                </Button>
              ) : (
                <Button
                  variant={"ghost"}
                  size={"lg"}
                  className="flex-1 bg-[#2463EB] text-white rounded-xl hover:bg-blue-700 hover:text-white"
                >
                  Publish
                </Button>
              )}
              <Button variant={"ghost"} size={"icon"} className="p-2 bg-white">
                <EllipsisVertical />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
