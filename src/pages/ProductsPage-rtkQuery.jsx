import { useSearchParams } from "react-router-dom";
import { useReadProductsQuery } from "../features/product/productSlice-rtkQuery";
import ProductCard from "../components/ProductCard";
import { generateQueryParams } from "../services/productService";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("available"));

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useReadProductsQuery(generateQueryParams(searchParams));

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="mt-8 m-5">
      <input
        type="text"
        placeholder="search here..."
        className="p-2 mb-2 border w-1/2"
        value={searchParams.get("name") ?? ""}
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
          checked={searchParams.get("available") === "true" ? true : false}
          onChange={(e) =>
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
