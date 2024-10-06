"use client";

import { getProductById } from "@/action/product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const ProductPage = () => {
  const [product, setProduct] = useState("");
  const params = useParams();
  const slug = params?.slug as string;

  const fetchData = async (params: string) => {
    try {
      const product = getProductById(params);
      setProduct(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(slug);
  }, []);
  if (product) {
    return <div>{product}</div>;
  } else {
    return <div>No product found.</div>;
  }
};
export default ProductPage;
