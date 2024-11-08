"use client";
import { useEffect, useState } from "react";
import { Plus, MoreVertical, Search, Menu } from "lucide-react";
import Image from "next/image";
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
import { getProduct } from "@/action/product";

interface Question {
  id: string;
  text: string;
  productId: string;
}

interface Product {
  userId: string;
  id: string;
  title: string;
  description: string;
  logoUrl: string | null;
  questions: Question[];
}

interface ProductResponse {
  success: boolean;
  products: Product[];
  totalProducts: number;
}

export default function Component() {
  const [searchQuery, setSearchQuery] = useState("");
  const setSidebarOpen = useSetRecoilState(sidebarAtom);
  const [products, setProducts] = useState<Product[]>([]);
  const { data: session, status } = useSession();

  const fetchProducts = async () => {
    try {
      let userId: string | undefined;
      if (session?.user?.id) {
        userId = session.user.id;
      } else {
        throw new Error("User not authenticated.");
      }
      const response = await getProduct({ userId });
      // Update this line to use the correct property name
      setProducts(response.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [status, session]);

  const handleAddProduct = () => {
    // Implement your add product logic here
    console.log("Add product clicked");
  };
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProductCard = (product: Product) => (
    <Card key={product.id}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{product.title}</CardTitle>
          {/* Add logo if available */}
          {product.logoUrl && (
            <div className="w-10 h-10 relative">
              <Image
                src={product.logoUrl}
                alt={`${product.title} logo`}
                fill
                className="object-contain"
              />
            </div>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleEditProduct(product.id)}>
                Edit product
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleViewReviews(product.id)}>
                View reviews
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600"
                onClick={() => handleDeleteProduct(product.id)}
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
          <div className="flex items-center">
            <Badge variant="secondary">
              {product.questions.length} Questions
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const handleEditProduct = (productId) => {
    console.log("Edit product:", productId);
  };

  const handleViewReviews = (productId) => {
    console.log("View reviews:", productId);
  };

  const handleDeleteProduct = (productId) => {
    console.log("Delete product:", productId);
  };

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
              <Button className="hidden sm:flex" onClick={handleAddProduct}>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map(renderProductCard)}
          </div>
        </main>
      </div>
    </div>
  );
}
