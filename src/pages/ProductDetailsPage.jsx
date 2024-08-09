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
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
}
