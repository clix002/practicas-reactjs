import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import UseCart from "../hooks/useCart";

// eslint-disable-next-line react/prop-types
function CartItem({ images, title, price, quantity, addToCart }) {
  return (
    <li className="border-b border-gray-700 pb-4">
      <img src={images} alt="cart" />
      <div>
        <strong>{title}</strong> -$ {price}
      </div>
      <footer>
        <small>Qty: {quantity} </small>
        <button
          onClick={addToCart}
          className="rounded-lg bg-black p-1 text-sm text-white"
        >
          +
        </button>
      </footer>
    </li>
  );
}

const Cart = () => {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = UseCart();
  return (
    <>
      <label htmlFor={cartCheckboxId} className="rounded-full bg-sky-500 p-2">
        <CartIcon />
      </label>
      <input type="checkbox" hidden id={cartCheckboxId} className="peer" />

      <aside className="fixed right-0 top-14 h-auto w-[300px] translate-x-full transform bg-black/20 p-5 peer-checked:translate-x-0">
        <ul>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              addToCart={() => addToCart(item)}
            />
          ))}
        </ul>
        <button
          onClick={clearCart}
          className="m-1 rounded-full bg-white p-1 text-rose-500"
        >
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Cart;
