import ProductCard from "../components/ProductCard";
import productService from "../services/productService";
import { useLoaderData, useSearchParams } from "react-router-dom";

export async function loader({ request }) {
  // console.log(request);
  const url = new URL(request.url);
  const products = await productService.readProducts(url.searchParams);
  return { products };
}

export default function ProductsPage() {
  const { products } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log();
  return (
    <div className="mt-8 m-5">
      <input
        type="text"
        placeholder="search here..."
        className="p-2 mb-2 border w-1/2"
        onChange={(e) =>
          setSearchParams((prev) => {
            if (e.target.value) {
              prev.set("name", e.target.value);
            } else {
              prev.delete("name");
            }
            return prev;
          })
        }
      />
      <label>
        Only show available products
        <input
          type="checkbox"
          onClick={(e) =>
            setSearchParams((prev) => {
              e.target.checked
                ? prev.set("available", e.target.checked)
                : prev.delete("available");
              return prev;
            })
          }
        />
      </label>
      <div className="grid grid-cols-4 gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
