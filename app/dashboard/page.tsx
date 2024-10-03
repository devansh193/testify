"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
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
import { TestimonialCardCustomizer } from "@/components/client-review-card-customizer";
import { useRecoilState } from "recoil";
import { dialogAtom } from "@/recoil/atom";
import { getProduct, ProductProp } from "@/action/product";

export default function Dashboard() {
  const [testimonialCards, setTestimonialCards] = useState<ProductProp[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useRecoilState(dialogAtom);
  const { data: session, status } = useSession();

  const fetchTestimonials = async () => {
    if (status === "loading") return;
    try {
      let userId: string | undefined;

      if (session && session.user) {
        userId = session.user.id;
      }

      if (!userId) {
        throw new Error("User is not authenticated");
      }

      const { products } = await getProduct({
        userId,
        page: 1,
        pageSize: 100,
      });

      setTestimonialCards(products);
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, status]);

  const filteredCards = testimonialCards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-8">
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
              onClick={() => {}}
            >
              <Plus className="mr-2 h-4 w-4" /> Create New Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-screen overflow-auto p-8">
            <TestimonialCardCustomizer onSave={() => {}} />
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
          {filteredCards.map((card) => (
            <TableRow key={card.id}>
              <TableCell>{card.title}</TableCell>
              <TableCell>{card.description}</TableCell>
              <TableCell>{card.questions.length}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="icon"
                  className="mr-2"
                  onClick={() => {}}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => {}}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
