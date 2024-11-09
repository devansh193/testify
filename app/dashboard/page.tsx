"use client";
import { useState } from "react";
import { Plus, MoreVertical, Search, Menu } from "lucide-react";
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
import { useSetRecoilState } from "recoil";
import { sidebarAtom } from "@/recoil/atom";
import { Sidebar } from "@/components/sidebar";
import { useSession } from "next-auth/react";
import { deleteProduct } from "@/action/product";
import { toast } from "sonner";
import { useGetProducts } from "@/features/product/api/use-get-products";
import { Testimonial } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";

interface Product {
  userId: string;
  id: string;
  title: string;
  description: string;
  questions: string[];
  rating: boolean;
  testimonials: Testimonial[];
}

export const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const setSidebarOpen = useSetRecoilState(sidebarAtom);
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
    <Card key={product.id} className="hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{product.title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
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
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <Badge variant="secondary">
            {product.questions.length} Question(s)
          </Badge>
          <Badge variant="secondary">
            {product.testimonials.length} Testimonial(s)
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  if (error) return <p>Error loading products.</p>;

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="flex h-16 items-center justify-between border-b px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open sidebar</span>
            </Button>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                className="text-sm font-medium hover:text-black/70"
                href="#"
              >
                Products
              </Link>
              <Link
                className="text-sm font-medium hover:text-black/70"
                href="#"
              >
                Reviews
              </Link>
              <Link
                className="text-sm font-medium hover:text-black/70"
                href="#"
              >
                Analytics
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Products</h1>
              <p className="text-gray-500">
                Manage your products and their reviews
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  className="pl-8"
                  placeholder="Search products..."
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Link href={"/dashboard/create"}>
                <Button className="hidden sm:flex" onClick={handleAddProduct}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </Link>
            </div>
          </div>
          {isLoading ? (
            <div>
              <main className="flex-1 overflow-y-auto p-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <Card key={index} className="hover:shadow-md">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Skeleton className="h-6 w-3/4" />
                          <Skeleton className="h-8 w-8 rounded-full" />
                        </div>
                        <Skeleton className="h-4 w-full mt-2" />
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <Badge variant="secondary">
                            <Skeleton className="h-4 w-20" />
                          </Badge>
                          <Badge variant="secondary">
                            <Skeleton className="h-4 w-24" />
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </main>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map(renderProductCard)}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
