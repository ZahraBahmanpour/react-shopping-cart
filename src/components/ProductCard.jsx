import CardButton from "./CardButton";

export default function ProductCard({ product }) {
  const { image, name, price } = product;
  return (
    <div className="flex flex-col items-center border p-2">
      <img src={image} alt={name} width={200} height={400} />
      <h3>{name}</h3>
      <div>${price}</div>
      <CardButton />
    </div>
  );
}
