import { Badge, MoreVertical } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Testimonial } from "@prisma/client";
import { deleteProduct } from "@/action/product";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Product {
  userId: string;
  id: string;
  title: string;
  description: string;
  questions: string[];
  rating: boolean;
  testimonials: Testimonial[];
}

const handleDelete = async (productId: string) => {
  try {
    await deleteProduct({ productId });
    toast.message("Product deleted successfully");
  } catch (_error) {
    toast.message(`Error deleting product: ${_error}`);
  }
};

const ProductCard = (product: Product) => {
  const router = useRouter;
  return (
    <Card
      key={product.id}
      className="hover:shadow-lg transition-shadow duration-300"
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base sm:text-lg font-semibold line-clamp-1">
            {product.title}
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => {}}>
                Edit product
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>
                View reviews
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600"
                onClick={() => handleDelete(product.id)}
              >
                Delete product
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CardDescription className="text-sm line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge className="text-xs">
            {product.questions.length} Question(s)
          </Badge>
          <Badge className="text-xs">
            {product.testimonials.length} Testimonial(s)
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
