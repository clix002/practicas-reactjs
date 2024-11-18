import Cart from "./Cart";
import Filters from "./Filters";

const Header = () => {
  return (
    <div className="sticky top-0 flex h-auto w-full items-center justify-between bg-white p-2">
      <div>
        <h2>React Shop 🛒</h2>
      </div>
      <div />
      <div className="flex gap-10">
        <Filters />
        <Cart />
      </div>
    </div>
  );
};

export default Header;
