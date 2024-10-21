import { createSelector } from "reselect";

// const selectCategoryReducer = (state) => {
//   console.log("🚀 ~ selectCategoryReducer ~ state:", " SELECTOR 1 FIRED");
//   return state.category;
// };

// export const selectCategoriesMap = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => {
//     console.log("🚀 ~ categoriesSlice: SELECTOR 2 FIRED", categoriesSlice);
//     return categoriesSlice.categoriesMap;
//   }
// );

export const selectCategoriesMap = (state) => state.category.categoriesMap;
