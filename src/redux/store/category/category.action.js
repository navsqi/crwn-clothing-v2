import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategoriesMap = (categoriesMap) => {
  return { type: CATEGORY_ACTION_TYPES.SET_CATEGORY, payload: categoriesMap };
};
