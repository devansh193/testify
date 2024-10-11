import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BarChart2, FileText, Plus, ThumbsUp } from "lucide-react";

export default function LoadingDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Product Dashboard
          </h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-black text-white hover:bg-gray-800">
                <Plus className="mr-2 h-4 w-4" /> Create New Testimonial
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-screen overflow-auto p-8">
              <Skeleton className="w-full h-[400px]" />
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
              {[...Array(4)].map((_, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      <Skeleton className="h-4 w-[100px]" />
                    </CardTitle>
                    {[FileText, ThumbsUp, BarChart2, ArrowRight][index] && (
                      <div className="h-4 w-4 text-muted-foreground">
                        {
                          [
                            <FileText />,
                            <ThumbsUp />,
                            <BarChart2 />,
                            <ArrowRight />,
                          ][index]
                        }
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-8 w-[60px]" />
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Product Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <Skeleton className="w-full h-[350px]" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="products" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div>
                        <Skeleton className="h-4 w-[150px]" />
                        <Skeleton className="h-3 w-[100px] mt-2" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full mt-2" />
                    <div className="mt-4 flex items-center">
                      {[...Array(5)].map((_, starIndex) => (
                        <Skeleton key={starIndex} className="h-5 w-5 mr-1" />
                      ))}
                      <Skeleton className="h-4 w-[40px] ml-2" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Skeleton className="h-9 w-[100px]" />
                    <div className="space-x-2">
                      <Skeleton className="h-8 w-8 rounded-md inline-block" />
                      <Skeleton className="h-8 w-8 rounded-md inline-block" />
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
              <CardContent>
                <div className="space-y-2">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex items-center">
                      <Skeleton className="h-4 w-1/4 mr-2" />
                      <Skeleton className="h-4 w-1/4 mr-2" />
                      <Skeleton className="h-4 w-1/4 mr-2" />
                      <Skeleton className="h-4 w-1/4" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
