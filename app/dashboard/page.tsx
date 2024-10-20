"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
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
import { getProduct } from "@/action/product";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { ProductDetails } from "@/schema/schema";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [testimonialCards, setTestimonialCards] = useState<ProductDetails[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useRecoilState(dialogAtom);
  const { data: session, status } = useSession();
  const router = useRouter();

  const testimonialsFetched = useRef(false);

  const fetchTestimonials = async () => {
    if (testimonialsFetched.current || status !== "authenticated") return;

    setLoading(true);

    try {
      let userId: string | undefined;

      if (session?.user?.id) {
        userId = session.user.id;
      } else {
        throw new Error("User is not authenticated");
      }

      const { products } = await getProduct({
        userId,
      });

      setTestimonialCards(products || []);
      testimonialsFetched.current = true;
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated" && !testimonialsFetched.current) {
      fetchTestimonials();
    }
  }, [status, session]);

  const filteredCards = testimonialCards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (productId: string) => {
    router.push(`/products/${productId}`);
  };

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
            <Button className="bg-black text-white hover:bg-gray-800">
              <Plus className="mr-2 h-4 w-4" /> Create New Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-screen overflow-auto p-8">
            <TestimonialCardCustomizer />
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

        {loading ? (
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="h-4 w-[200px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-[300px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-[50px]" />
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Skeleton className="h-8 w-8 rounded-md" />
                    <Skeleton className="h-8 w-8 rounded-md" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            {filteredCards.map((card) => (
              <TableRow
                key={card.id}
                onClick={() => handleRowClick(card.id)}
                className="hover:cursor-pointer"
              >
                <TableCell>{card.title}</TableCell>
                <TableCell>{card.description}</TableCell>
                <TableCell>{card.questions.length}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="icon"
                    className="mr-2"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </div>
  );
}
