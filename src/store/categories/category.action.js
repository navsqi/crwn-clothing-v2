import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, []);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => {
  console.log("fetchCategoriesAsync FIRING");
  return async (dispatch) => {
    console.log("fetchCategoriesAsync START");
    dispatch(fetchCategoriesStart());
    try {
      const resp = await getCategoriesAndDocuments("categories");
      dispatch(fetchCategoriesSuccess(resp));
      console.log("fetchCategoriesAsync SUCCESS ", resp);
    } catch (error) {
      console.log("fetchCategoriesAsync FAILED", error);
      dispatch(fetchCategoriesFailed(error.message));
    }
  };
};
