import { createContext, useState } from "react";
import { productsData } from "../dummy-data";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const value = { products, setProducts };
  console.log("🚀 ~ ProductsProvider ~ products:", products);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
