/* eslint-disable react/prop-types */
import { AddToCartIcon } from "./Icons";

export const Products = ({ products }) => {
  return (
    <main className="">
      <ul className="grid grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* react/prop-types */}
        {products.slice(0, 10).map((product) => (
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
              <button className="mb-2 flex h-[30px] w-[100px] items-center justify-center rounded-md bg-black text-center text-white transition hover:bg-gray-400 hover:text-black">
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
