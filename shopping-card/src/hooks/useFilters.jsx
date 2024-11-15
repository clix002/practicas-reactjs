import { useContext } from "react";
import { filtersCotext } from "../context/filters";

export function useFilters() {
  const { filters, setFilters } = useContext(filtersCotext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" ||
          product.category.name === filters.category)
      );
    });
  };

  return { filterProducts, setFilters, filters };
}
