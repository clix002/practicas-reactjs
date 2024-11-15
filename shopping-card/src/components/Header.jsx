import Filters from "./Filters";

const Header = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-between p-2">
      <h2>React Shop 🛒</h2>
      <Filters />
    </div>
  );
};

export default Header;
