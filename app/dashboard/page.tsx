"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface TestimonialCard {
  id: number
  productName: string
  testimonial: string
  author: string
}

export default function EnhancedDashboard() {
  const [testimonialCards, setTestimonialCards] = useState<TestimonialCard[]>([])
  const [newCard, setNewCard] = useState<Omit<TestimonialCard, "id">>({
    productName: "",
    testimonial: "",
    author: "",
  })
  const [editingCard, setEditingCard] = useState<TestimonialCard | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const itemsPerPage = 5

  useEffect(() => {
    // Simulating fetching data from an API
    const mockData: TestimonialCard[] = [
      { id: 1, productName: "Product A", testimonial: "Great product!", author: "John Doe" },
      { id: 2, productName: "Product B", testimonial: "Awesome service!", author: "Jane Smith" },
      // Add more mock data as needed
    ]
    setTestimonialCards(mockData)
  }, [])

  const filteredCards = testimonialCards.filter(
    card =>
      card.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.testimonial.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const paginatedCards = filteredCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage)

  const handleCreateCard = () => {
    if (editingCard) {
      setTestimonialCards(
        testimonialCards.map(card =>
          card.id === editingCard.id ? { ...card, ...newCard } : card
        )
      )
      setEditingCard(null)
    } else {
      setTestimonialCards([...testimonialCards, { ...newCard, id: Date.now() }])
    }
    setNewCard({ productName: "", testimonial: "", author: "" })
    setIsDialogOpen(false)
  }

  const handleEditCard = (card: TestimonialCard) => {
    setEditingCard(card)
    setNewCard({ productName: card.productName, testimonial: card.testimonial, author: card.author })
    setIsDialogOpen(true)
  }

  const handleDeleteCard = (id: number) => {
    setTestimonialCards(testimonialCards.filter(card => card.id !== id))
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-black mb-8">Testimonial Dashboard</h1>

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
            <Button className="bg-black text-white hover:bg-gray-800">
              <Plus className="mr-2 h-4 w-4" /> Create New Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingCard ? "Edit Testimonial" : "Create New Testimonial"}</DialogTitle>
              <DialogDescription>
                Enter the details for the testimonial card.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="productName" className="text-right">
                  Product Name
                </Label>
                <Input
                  id="productName"
                  value={newCard.productName}
                  onChange={(e) => setNewCard({ ...newCard, productName: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="testimonial" className="text-right">
                  Testimonial
                </Label>
                <Textarea
                  id="testimonial"
                  value={newCard.testimonial}
                  onChange={(e) => setNewCard({ ...newCard, testimonial: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="author" className="text-right">
                  Author
                </Label>
                <Input
                  id="author"
                  value={newCard.author}
                  onChange={(e) => setNewCard({ ...newCard, author: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <Button onClick={handleCreateCard} className="w-full bg-black text-white hover:bg-gray-800">
              {editingCard ? "Update Testimonial" : "Create Testimonial"}
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Testimonial</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedCards.map((card) => (
            <TableRow key={card.id}>
              <TableCell>{card.productName}</TableCell>
              <TableCell>{card.testimonial}</TableCell>
              <TableCell>{card.author}</TableCell>
              <TableCell>
                <Button variant="outline" size="icon" className="mr-2" onClick={() => handleEditCard(card)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleDeleteCard(card.id)}>
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
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
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
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}