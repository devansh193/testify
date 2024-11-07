import TestifyLogo from "@/components/Logo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import Link from "next/link";

const Product = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="hidden md:block w-[400px] bg-white h-full border-r-2 border-gray-200">
        <div className="h-16 bg-zinc-50 border-b-2 border-gray-200 p-4">
          <TestifyLogo />
        </div>
        <div className="p-4">hi there i am sidebar.</div>
      </div>
      <div className="bg-white w-full">
        <div className="h-16 flex items-center justify-between bg-zinc-50 border-b-2 border-gray-200 p-4 pt-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Link href="/products/create">
            <Button>
              <Plus className="mr-2" /> Create a product
            </Button>
          </Link>
        </div>
        <div className="p-4">
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-gray-500">Manage your products.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 ">
            <Card className="w-[400px]">
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>Card description</CardDescription>
              </CardHeader>
              <CardContent>this is card content</CardContent>
              <CardFooter>Submit</CardFooter>
            </Card>
            <Card className="w-[400px]">
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>Card description</CardDescription>
              </CardHeader>
              <CardContent>this is card content</CardContent>
              <CardFooter>Submit</CardFooter>
            </Card>
            <Card className="w-[400px]">
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>Card description</CardDescription>
              </CardHeader>
              <CardContent>this is card content</CardContent>
              <CardFooter>Submit</CardFooter>
            </Card>
            <Card className="w-[500px] sm:w-[400px]">
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>Card description</CardDescription>
              </CardHeader>
              <CardContent>this is card content</CardContent>
              <CardFooter>Submit</CardFooter>
            </Card>
            <Card className="w-[400px]">
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>Card description</CardDescription>
              </CardHeader>
              <CardContent>this is card content</CardContent>
              <CardFooter>Submit</CardFooter>
            </Card>
            <Card className="w-[400px]">
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>Card description</CardDescription>
              </CardHeader>
              <CardContent>this is card content</CardContent>
              <CardFooter>Submit</CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
