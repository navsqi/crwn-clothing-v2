import React, { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { ProductsContext } from "../../contexts/products.context";

const CategoriesPreview = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      {Object.keys(products).map((category) => {
        const productList = products[category];
        return (
          <>
            <CategoryPreview title={category} products={productList} />
          </>
        );
      })}
    </>
  );
};

export default CategoriesPreview;
