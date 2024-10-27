"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  titleAtom,
  descriptionAtom,
  questionsAtom,
  productAtom,
} from "@/recoil/atom";
import { getProductByTitle } from "@/action/product";
import LoadingPage from "@/app/loading";
import ReviewCard from "@/components/client-review-card";
import NotFound from "../not-found";

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [product, setProduct] = useRecoilState(productAtom);
  const [loading, setLoading] = useState(true);
  const setTitle = useSetRecoilState(titleAtom);
  const setDescription = useSetRecoilState(descriptionAtom);
  const setQuestions = useSetRecoilState(questionsAtom);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        console.log(slug);
        const { success, product: fetchedProduct } = await getProductByTitle(
          slug
        );
        if (success && fetchedProduct) {
          setProduct(fetchedProduct);
          setTitle(fetchedProduct.title);
          setDescription(fetchedProduct.description);
          setQuestions(
            fetchedProduct.questions.map((question) => ({
              ...question,
              id: parseInt(question.id, 10),
            }))
          );
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (loading) {
    return <LoadingPage />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className=" bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <ReviewCard />
    </div>
  );
}
