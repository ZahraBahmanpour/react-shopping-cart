import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import productService from "../services/productService";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const readProducts = async () => {
      const products = await productService.readProducts();
      setProducts(products);
    };
    readProducts();
    console.log(products);
  }, []);
  return (
    <>
      <input
        type="text"
        placeholder="search here..."
        className="p-2 mb-2 border w-1/2"
      />
      <div className="grid grid-cols-4 gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
