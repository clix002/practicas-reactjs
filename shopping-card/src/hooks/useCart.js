import { useContext } from "react";
import { CartContext } from "../context/cart";

const UseCart = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error("UseCart must be with a CartProvider");

  return context;
};

export default UseCart;
