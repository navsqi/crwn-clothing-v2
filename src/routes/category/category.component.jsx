import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../redux/store/category/category.selector";
import "./category.styles.scss";

const Category = () => {
  console.log("🚀 CATEGORYCOMPONENT ~ RENDER: Category Component");
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log("🚀 CATEGORYCOMPONENT ~ useEffect: effectFiring setProducts");
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
