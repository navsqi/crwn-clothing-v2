import { Fragment } from "react";

import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../redux/store/category/category.selector";

const CategoriesPreview = () => {
  console.log("🚀 ~ RENDER: CategoriesPreview");
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log("🚀 ~ CategoriesPreview ~ categoriesMap:", categoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
