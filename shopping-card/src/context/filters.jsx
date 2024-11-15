import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const filtersCotext = createContext();

// eslint-disable-next-line react/prop-types
const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });
  return (
    <filtersCotext.Provider value={{ filters, setFilters }}>
      {children}
    </filtersCotext.Provider>
  );
};

export default FiltersProvider;
