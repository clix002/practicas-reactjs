import { useState } from "react";
import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import Header from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import Footer from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";
import { CartProvider } from "./context/cart";

function App() {
  const [products] = useState(initialProducts);

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <div className="relative mx-auto max-w-7xl space-y-4">
        <Header />
        <Products products={filteredProducts} />
        {IS_DEVELOPMENT && <Footer />}
      </div>
    </CartProvider>
  );
}

export default App;
