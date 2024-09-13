import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import productService from "../services/productService";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, PRODUCTS_URL } from "../services/api";
import useFetch from "../hooks/useFetch";

export async function loader({ params }) {
  const product = await productService.readProduct(params.productId);
  return { product };
}
export default function ProductDetailsPage() {
  // const {
  //   product: { name, image, price },
  // } = useLoaderData();
  const { productId } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetch(`${PRODUCTS_URL}/${productId}`);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  const { name, image, price } = product;
  return (
    <div className="flex flex-col items-center">
      <h1>{name}</h1>
      <img src={image} alt={name} width="640" height={"480"} />
      <p>${price}</p>
    </div>
  );
}
