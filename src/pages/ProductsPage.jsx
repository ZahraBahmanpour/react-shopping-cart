import ProductCard from "../components/ProductCard";
import productService from "../services/productService";
import { useLoaderData, useSearchParams } from "react-router-dom";

export async function loader({ request }) {
  // console.log(request);
  const url = new URL(request.url);
  const products = await productService.readProducts(
    url.searchParams.get("title"),
    url.searchParams.get("available")
  );
  return { products };
}

export default function ProductsPage() {
  const { products } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="mt-8 m-5">
      <input
        type="text"
        placeholder="search here..."
        className="p-2 mb-2 border w-1/2"
        onChange={(e) =>
          setSearchParams((prev) => {
            prev.set("title", e.target.value);
            return prev;
          })
        }
      />
      <input
        type="checkbox"
        onClick={(e) =>
          setSearchParams((prev) => {
            prev.set("available", e.target.checked);
            return prev;
          })
        }
      />
      <div className="grid grid-cols-4 gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
