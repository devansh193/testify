"use client";

import { useState } from "react";
import { Plus, MoreVertical, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSession } from "next-auth/react";
import { deleteProduct } from "@/action/product";
import { toast } from "sonner";
import { useGetProducts } from "@/features/product/api/use-get-products";
import { Testimonial } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";
import Sidebar from "@/components/sidebar";

interface Product {
  userId: string;
  id: string;
  title: string;
  description: string;
  questions: string[];
  rating: boolean;
  testimonials: Testimonial[];
}

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session } = useSession();
  const userId = session?.user?.id || "";
  const { data: products = [], isLoading, error } = useGetProducts(userId);

  const handleAddProduct = () => {
    console.log("Add product clicked");
  };

  const handleDelete = async (productId: string) => {
    try {
      await deleteProduct({ productId });
      toast.message("Product deleted successfully");
    } catch (_error) {
      toast.message(`Error deleting product: ${_error}`);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProductCard = (product: Product) => (
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
          <Badge variant="secondary" className="text-xs">
            {product.questions.length} Question(s)
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {product.testimonials.length} Testimonial(s)
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  if (error)
    return (
      <p className="text-center py-8 text-red-600">Error loading products.</p>
    );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <header className="sticky sm:h-16 top-0 z-20 bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center w-full justify-between sm:w-auto">
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <span className="sr-only">Toggle Sidebar</span>
                </Button>
                <h1 className="text-xl ml-4 sm:text-2xl font-bold">Products</h1>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <div className="relative flex-grow w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    className="pl-10 w-full text-sm"
                    placeholder="Search products..."
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Link href="/dashboard/create" className="w-full sm:w-auto">
                  <Button
                    onClick={handleAddProduct}
                    className="w-full sm:w-auto"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Product
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {isLoading ? (
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="animate-pulse">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-5 sm:h-6 w-3/4" />
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                    <Skeleton className="h-3 sm:h-4 w-full mt-2" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-5 sm:h-6 w-20" />
                      <Skeleton className="h-5 sm:h-6 w-24" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map(renderProductCard)}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
