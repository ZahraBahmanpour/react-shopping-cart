import { useCreateProductMutation } from "../features/product/productSlice-rtkQuery";

export default function CreateProductPage() {
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target["name"].value);
    createProduct({
      name: e.target["name"].value,
      price: e.target["price"].value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="name" />
      <br />
      <input type="number" id="price" />
      <button type="submit">Create</button>
    </form>
  );
}
