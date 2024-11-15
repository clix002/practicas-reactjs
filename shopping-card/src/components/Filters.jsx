import { useId } from "react";
import { useFilters } from "../hooks/useFilters";

const Filters = () => {
  const { filters, setFilters } = useFilters();

  const priceId = useId();
  const categoryId = useId();

  const handleChangeRange = ({ target: { value } }) => {
    setFilters((prevState) => {
      return {
        ...prevState,
        minPrice: value,
      };
    });
  };

  const handleChangeCategory = ({ target: { value } }) => {
    setFilters((prevState) => ({ ...prevState, category: value }));
  };
  return (
    <section className="flex w-full justify-between gap-3">
      <div className="flex items-center justify-center gap-x-3">
        <label htmlFor={priceId}>Price</label>
        <input
          type="range"
          id={priceId}
          min={0}
          max={150}
          onChange={handleChangeRange}
          value={filters.minPrice}
        />
        <span className="font-bold">${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryId} className="mr-2">
          Category
        </label>
        <select id={categoryId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="Clothes">Clothes</option>
          <option value="Electronics">Electronics</option>
          <option value="Shoes">Shoes</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Groseryy">Groseryy</option>
          <option value="Computer Category">Computer Category</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
