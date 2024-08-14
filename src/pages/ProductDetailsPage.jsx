import { useLoaderData } from "react-router-dom";
import productService from "../services/productService";

export async function loader({ params }) {
  const product = await productService.readProduct(params.productId);
  return { product };
}
export default function ProductDetailsPage() {
  const {
    product: { name, image, price },
  } = useLoaderData();

  return (
    <div className="flex flex-col items-center">
      <h1>{name}</h1>
      <img src={image} alt={name} width="640" height={"480"} />
      <p>${price}</p>
    </div>
  );
}
