"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { titleAtom, descriptionAtom } from "@/recoil/atom";
import { getProductByTitle, ProductWithQuestions } from "@/action/product";
import { notFound } from "next/navigation";
import LoadingPage from "@/app/loading";
import { ClientReviewCardComponent } from "@/components/client-review-card";
import { Card } from "@/components/ui/card";
export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [product, setProduct] = useState<ProductWithQuestions | null>(null);
  const [loading, setLoading] = useState(true);
  const setTitle = useSetRecoilState(titleAtom);
  const setDescription = useSetRecoilState(descriptionAtom);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        const fetchedProduct = await getProductByTitle(slug);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
          setTitle(fetchedProduct.title);
          setDescription(fetchedProduct.description);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug, setTitle, setDescription]);

  if (loading) {
    return <LoadingPage />;
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center justify-center mb-6">
            <h2 className="ml-3 text-2xl font-bold text-gray-900">
              Your Feedback Matters
            </h2>
          </div>

          <p className="text-center text-gray-600 mb-6">
            We value your opinion. Please take a moment to share your experience
            with us.
          </p>

          <ClientReviewCardComponent />
        </div>

        <div className="px-4 py-4 bg-gray-50 sm:px-6">
          <p className="text-xs text-center text-gray-500">
            Your review helps us improve our services and assists other
            customers in making informed decisions.
          </p>
        </div>
      </Card>
    </div>
  );
}
