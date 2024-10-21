import { CATEGORY_ACTION_TYPES } from "./category.types";

const initialState = {
  categoriesMap: {},
};

export const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORY:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
