import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((store) => store.cart);
  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.map((item) => (
        <div className="grid grid-cols-3">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <p>{item.qty}</p>
        </div>
      ))}
      <h1>${totalPrice}</h1>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}
