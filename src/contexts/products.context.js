import { createContext, useEffect, useState } from "react";
import SHOP_DATA, { productsData } from "../dummy-data";
import {
  addCollectionAndDocument,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };
  console.log("🚀 ~ ProductsProvider ~ products:", products);

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log("🚀 ~ getCategories ~ categoryMap:", categoryMap);
      setProducts(categoryMap);
    };

    getCategories();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
