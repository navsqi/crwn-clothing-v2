import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { products: productList } = useContext(ProductsContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = productList[category];
    setProducts(filteredProducts);
  }, [productList, category]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </div>
  );
};

export default Category;
