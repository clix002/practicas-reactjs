/* eslint-disable react/prop-types */
import UseCart from "../hooks/useCart";
import { cn } from "../lib/utils";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";

export const Products = ({ products }) => {
  const { cart, addToCart, removeFromCart } = UseCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <main className="">
      <ul className="grid grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* react/prop-types */}
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li
              key={product.id}
              className="flex min-h-[217px] min-w-[200px] flex-col items-center justify-center gap-2 rounded-md bg-gray-300"
            >
              <img
                src={product.images}
                alt={product.title}
                className="h-auto rounded-b-none rounded-t-md object-cover"
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                  className={cn(
                    "mb-2 flex h-[30px] w-[100px] items-center justify-center rounded-md bg-black text-center text-white transition hover:bg-gray-400 hover:text-black",
                    isProductInCart ? "bg-rose-500" : "bg-green-500",
                  )}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
