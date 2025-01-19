"use client";
import { TestimonialsTable } from "./testimonial-table";

const testimonials = [
  {
    id: "1",
    customer: {
      name: "Alex Morgan",
      email: "alex@company.com",
      avatar: "",
    },
    rating: 5,
    text: "Amazing product! Has helped us streamline our feedback collection process...",
    date: "July 12, 2023",
    status: "Published" as const,
  },
  {
    id: "2",
    customer: {
      name: "Sarah Connor",
      email: "sarah@tech.com",
      avatar: "",
    },
    rating: 4,
    text: "Great platform with room for some improvements in the reporting...",
    date: "July 10, 2023",
    status: "Pending" as const,
  },
  {
    id: "3",
    customer: {
      name: "Alex Morgan",
      email: "alex@company.com",
      avatar: "",
    },
    rating: 5,
    text: "Amazing product! Has helped us streamline our feedback collection process...",
    date: "July 12, 2023",
    status: "Published" as const,
  },
  {
    id: "4",
    customer: {
      name: "Sarah Connor",
      email: "sarah@tech.com",
      avatar: "",
    },
    rating: 4,
    text: "Great platform with room for some improvements in the reporting...",
    date: "July 10, 2023",
    status: "Pending" as const,
  },
  {
    id: "5",
    customer: {
      name: "Sarah Connor",
      email: "sarah@tech.com",
      avatar: "",
    },
    rating: 4,
    text: "Great platform with room for some improvements in the reporting...",
    date: "July 10, 2023",
    status: "Pending" as const,
  },
  {
    id: "6",
    customer: {
      name: "Sarah Connor",
      email: "sarah@tech.com",
      avatar: "",
    },
    rating: 4,
    text: "Great platform with room for some improvements in the reporting...",
    date: "July 10, 2023",
    status: "Pending" as const,
  },
  {
    id: "7",
    customer: {
      name: "Sarah Connor",
      email: "sarah@tech.com",
      avatar: "",
    },
    rating: 4,
    text: "Great platform with room for some improvements in the reporting...",
    date: "July 10, 2023",
    status: "Pending" as const,
  },
  {
    id: "8",
    customer: {
      name: "Sarah Connor",
      email: "sarah@tech.com",
      avatar: "",
    },
    rating: 4,
    text: "Great platform with room for some improvements in the reporting...",
    date: "July 10, 2023",
    status: "Pending" as const,
  },
  {
    id: "9",
    customer: {
      name: "Sarah Connor",
      email: "sarah@tech.com",
      avatar: "",
    },
    rating: 4,
    text: "Great platform with room for some improvements in the reporting...",
    date: "July 10, 2023",
    status: "Pending" as const,
  },
  {
    id: "10",
    customer: {
      name: "Sarah Connor",
      email: "sarah@tech.com",
      avatar: "",
    },
    rating: 4,
    text: "Great platform with room for some improvements in the reporting...",
    date: "July 10, 2023",
    status: "Pending" as const,
  },
];

const TestimonialsContent = () => {
  return (
    <div className="container mx-auto">
      <TestimonialsTable testimonials={testimonials} />
    </div>
  );
};
export default TestimonialsContent;
