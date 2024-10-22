"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
//import { Input } from "@/components/ui/input";
//import { Label } from "@/components/ui/label";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ArrowRight,
  Plus,
  Edit,
  Trash2,
  BarChart2,
  FileText,
  ThumbsUp,
} from "lucide-react";
import { TestimonialCardCustomizer } from "@/components/client-review-card-customizer";
import { getProduct } from "@/action/product";
import { useRouter } from "next/navigation";
import LoadingDashboard from "./loading";
import { useRecoilState } from "recoil";
import { productAtom } from "@/recoil/atom";

export default function ProductDashboard() {
  const [products, setProducts] = useRecoilState(productAtom);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();

  const testimonialsFetched = useRef(false);

  const fetchProducts = async () => {
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

      setProducts(products);
      testimonialsFetched.current = true;
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated" && !testimonialsFetched.current) {
      fetchProducts();
    }
  }, [status, session]);

  const chartData = products.map((product) => ({
    name: product.title,
    //views: product.,
    //conversions: product.conversions,
  }));
  return (
    <Suspense fallback={<LoadingDashboard />}>
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Product Dashboard
            </h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-black text-white hover:bg-gray-800">
                  <Plus className="mr-2 h-4 w-4" /> Create New Product
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-screen overflow-auto p-8">
                <TestimonialCardCustomizer />
              </DialogContent>
            </Dialog>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Products
                    </CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{products.length}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Testimonials
                    </CardTitle>
                    <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  {/* <CardContent>
                  <div className="text-2xl font-bold">
                    {products.reduce(
                      (sum, product) => sum + product.testimonials,
                      0
                    )}
                  </div>
                </CardContent> */}
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Views
                    </CardTitle>
                    <BarChart2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    {/* <div className="text-2xl font-bold">
                      {products.reduce(
                        (sum, product) => sum + product.views,
                        0
                      )}
                    </div> */}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Avg. Conversion Rate
                    </CardTitle>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  {/* <CardContent>
                  <div className="text-2xl font-bold">
                    {(
                      (products.reduce(
                        (sum, product) =>
                          sum + product.conversions / product.views,
                        0
                      ) /
                        products.length) *
                      100
                    ).toFixed(2)}
                    %
                  </div>
                </CardContent> */}
                </Card>
              </div>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Product Performance</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="views" fill="#8884d8" />
                      <Bar dataKey="conversions" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="products" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <Card key={product.title}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        {/* <Image
                        src={product.image}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      /> */}
                        <div>
                          <CardTitle>{product.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {/* {product.testimonials} testimonials */}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    {/* <CardContent>
                    <p className="text-sm text-gray-500">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <Star
                          key={rating}
                          className={`${
                            rating < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          } h-5 w-5 flex-shrink-0`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">
                        {product.rating.toFixed(1)}
                      </span>
                    </div>
                  </CardContent> */}
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">View Details</Button>
                      <div className="space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => {}}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Product Analytics</CardTitle>
                </CardHeader>
                {/* <CardContent>
                <div className="space-y-2">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center">
                      <div className="w-1/4 font-medium">{product.name}</div>
                      <div className="w-1/4">Views: {product.views}</div>
                      <div className="w-1/4">
                        Conversions: {product.conversions}
                      </div>
                      <div className="w-1/4">
                        Rate:{" "}
                        {((product.conversions / product.views) * 100).toFixed(
                          2
                        )}
                        %
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent> */}
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </Suspense>
  );
}
