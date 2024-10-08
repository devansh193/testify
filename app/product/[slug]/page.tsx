"use client";
import { Product } from "@prisma/client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
//import { Progress } from "@/components/ui/progress";
import { Star, ArrowLeft, Share2, Eye, MessageSquare } from "lucide-react";

import { getProductById } from "@/action/product";
import { useParams } from "next/navigation";
import LoadingPage from "@/app/loading";
import NotFound from "@/app/not-found";

export default function ProductDetails() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  //const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }
      try {
        console.log(`Product Id is ${slug}`);
        const result = await getProductById(slug);
        if (result.success && result.product) {
          setProduct(result.product);
        } else {
          setError(result.message || "Failed to fetch product");
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("An error occurred while fetching the product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading)
    return (
      <div>
        <LoadingPage />
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  if (!product)
    return (
      <div>
        <NotFound />
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {product.title}
            </h1>
            {/* <div className="mt-3 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <Star
                    key={rating}
                    className={`${
                      rating < Math.floor(product)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    } h-5 w-5 flex-shrink-0`}
                  />
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-900">
                {averageRating} out of 5 stars
              </p>
            </div> */}

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 space-y-6">
                <p>{product.description}</p>
              </div>
            </div>

            {/* <div className="mt-8 flex items-center">
              <Avatar className="h-12 w-12 rounded-full">
                <AvatarImage src={product.userId} alt={product.userId} />
                <AvatarFallback>
                  {product.userId
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Created by</p>
                <p className="text-lg font-bold text-gray-900">
                  {product.userId}
                </p>
              </div>
            </div> */}

            <div className="mt-10 flex items-center justify-between">
              <div className="space-x-2">
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Product Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Average Rating
                </CardTitle>
                <Star className="h-4 w-4 text-yellow-400" />
              </CardHeader>
              {/* <CardContent>
                <div className="text-2xl font-bold">{averageRating}</div>
                <Progress value={ratingPercentage} className="mt-2" />
                <p className="text-xs text-gray-500 mt-2">
                  Based on {product.totalReviews} reviews
                </p>
              </CardContent> */}
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Reviews
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {/* <div className="text-2xl font-bold">{product.totalReviews}</div> */}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Visits
                </CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {/* <div className="text-2xl font-bold">{product.totalVisits}</div> */}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Customer Reviews
          </h2>
          {/* <div className="space-y-6">
            {(showAllReviews
              ? product.reviews
              : product.reviews.slice(0, 3)
            ).map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={review.avatar} alt={review.user} />
                        <AvatarFallback>
                          {review.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <CardTitle className="text-sm font-medium">
                          {review.user}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-500">
                          {review.date}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <Star
                          key={rating}
                          className={`${
                            rating < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          } h-4 w-4 flex-shrink-0`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
          {/* {!showAllReviews && product.reviews.length > 3 && (
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setShowAllReviews(true)}
            >
              Show All Reviews
            </Button>
          )} */}
        </div>
      </main>
    </div>
  );
}
