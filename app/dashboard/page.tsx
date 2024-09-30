"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { TestimonialCardCustomizer } from "@/components/client-review-card-customizer";
import { useRecoilState } from "recoil";
import { dialogAtom } from "@/recoil/atom";

interface TestimonialCard {
  id: number;
  title: string;
  description: string;
  questions: { id: number; text: string; type: "rating" | "text" }[];
  showLogo: boolean;
  logoUrl: string;
}
interface TestimonialCardConfig {
  title: string;
  description: string;
  questions: { id: number; text: string; type: "rating" | "text" }[];
  showLogo: boolean;
  logoUrl: string;
}

export default function Dashboard() {
  const [testimonialCards, setTestimonialCards] = useState<TestimonialCard[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useRecoilState(dialogAtom);
  const [editCard, setEditCard] = useState<TestimonialCard | null>(null); // New state for editing card
  const itemsPerPage = 5;

  // Create new testimonial or update existing one
  const handleSaveTestimonial = (config: TestimonialCardConfig) => {
    if (editCard) {
      // Update the existing card
      setTestimonialCards(
        testimonialCards.map((card) =>
          card.id === editCard.id ? { ...editCard, ...config } : card
        )
      );
    } else {
      // Create a new card
      const newTestimonial: TestimonialCard = { ...config, id: Date.now() };
      setTestimonialCards([...testimonialCards, newTestimonial]);
    }
    setIsDialogOpen(false);
    setEditCard(null); // Clear edit state
  };

  const handleDeleteCard = (id: number) => {
    setTestimonialCards(testimonialCards.filter((card) => card.id !== id));
  };

  const filteredCards = testimonialCards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedCards = filteredCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

  const handleEditCard = (card: TestimonialCard) => {
    setEditCard(card);
    setIsDialogOpen(true);
  };

  return (
    <div className=" bg-white p-8">
      <h1 className="text-3xl font-bold text-black mb-8">
        Testimonial Dashboard
      </h1>

      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <Input
            type="text"
            placeholder="Search testimonials..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              className="bg-black text-white hover:bg-gray-800"
              onClick={() => setEditCard(null)}
            >
              <Plus className="mr-2 h-4 w-4" /> Create New Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-screen overflow-auto p-8">
            <TestimonialCardCustomizer onSave={handleSaveTestimonial} />
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Questions</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedCards.map((card) => (
            <TableRow key={card.id}>
              <TableCell>{card.title}</TableCell>
              <TableCell>{card.description}</TableCell>
              <TableCell>{card.questions.length}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="icon"
                  className="mr-2"
                  onClick={() => handleEditCard(card)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDeleteCard(card.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => setCurrentPage(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
