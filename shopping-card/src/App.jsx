import { useState } from "react";
import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import Header from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import Footer from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";

function App() {
  const [products] = useState(initialProducts);

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <div className="mx-auto max-w-7xl space-y-4">
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </div>
  );
}

export default App;
