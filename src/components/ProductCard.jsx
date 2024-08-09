import { Link } from "react-router-dom";
import CardButton from "./CardButton";

export default function ProductCard({ product }) {
  const { image, name, price, id } = product;
  return (
    <div className="flex flex-col items-center border p-2">
      <Link to={`/products/${id}`}>
        <img src={image} alt={name} width={200} height={400} />
        <h3>{name}</h3>
      </Link>
      <div>${price}</div>
      <CardButton />
    </div>
  );
}
