"use client";
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

export interface Product {
  userId: string;
  id: string;
  title: string;
  description: string;
  questions: string[];
  rating: boolean;
}

interface ProductCardProp {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProp) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
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
              <DropdownMenuItem className="text-red-600">
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
          {/* <Badge className="text-xs">
            {product.testimonials.length} Testimonial(s)
          </Badge> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
