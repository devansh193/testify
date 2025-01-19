"use client";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Trash2 } from "lucide-react";

interface Testimonial {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar?: string;
  };
  rating: number;
  text: string;
  date: string;
  status: "Published" | "Pending";
}

interface TestimonialsTableProps {
  testimonials: Testimonial[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function TestimonialsTable({ testimonials }: TestimonialsTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="h-12">
            <TableHead>Customer</TableHead>
            <TableHead className="hidden sm:table-cell">Rating</TableHead>
            <TableHead className="hidden md:table-cell max-w-[400px]">
              Testimonial
            </TableHead>
            <TableHead className="hidden lg:table-cell">Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {testimonials.map((testimonial) => (
            <TableRow
              key={testimonial.id}
              className="h-20 mb-2 font-sans rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={testimonial.customer.avatar} />
                    <AvatarFallback>
                      {testimonial.customer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm md:text-base">
                      {testimonial.customer.name}
                    </span>
                    <span className="text-xs md:text-sm text-muted-foreground">
                      {testimonial.customer.email}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "fill-current" : "fill-muted"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell max-w-[400px]">
                <p className="truncate">{testimonial.text}</p>
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                {testimonial.date}
              </TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={
                    testimonial.status === "Published"
                      ? "bg-green-100 text-green-700 rounded-full"
                      : "bg-yellow-100 text-yellow-700 rounded-full"
                  }
                >
                  {testimonial.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between py-4 flex-wrap">
        <p className="text-sm text-muted-foreground">
          Showing 1 to 10 of 45 testimonials
        </p>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-blue-700 text-primary-foreground"
          >
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
