import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";

export default function CardButton({ product }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  const exist = cartItems.find((item) => item.id === product.id);

  return (
    <div>
      {exist ? (
        <div className="flex">
          <button onClick={() => dispatch(removeFromCart(product))}>-</button>
          <div>{exist.qty}</div>
          <button onClick={() => dispatch(addToCart(product))}>+</button>
        </div>
      ) : (
        <button
          onClick={() => dispatch(addToCart(product))}
          className="p-2 bg-yellow-500 rounded-xl text-white hover:bg-yellow-500/50"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
