import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import productService from "../services/productService";
import {
  Navigate,
  useLoaderData,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import withLoader from "./withLoader";
import usePagination from "../hooks/usePagination";

export async function loader({ request }) {
  // console.log(request);
  const url = new URL(request.url);
  const products = await productService.readProducts(url.searchParams);
  return { products };
}

export default function ProductsPage() {
  // const { products } = useLoaderData();
  const { loading, error, products } = useSelector((store) => store.product);
  const [page, toNextPage, toPreviousPage] = usePagination(10);

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getProducts(searchParams));
  }, [searchParams]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
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
      <div>
        <button onClick={toPreviousPage}>-</button>
        {page}
        <button onClick={toNextPage}>+</button>
      </div>
    </div>
  );
}

export const ProductsWithLoader = withLoader(ProductsPage);
