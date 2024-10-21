import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => {
  console.log("🚀 ~ loggerMiddleware ~ store:", store);
  return (next) => (action) => {
    console.log("🚀 ~ loggerMiddleware dispatching", action);
    console.log("🚀 ~ loggerMiddleware current state", store.getState());
    const result = next(action);
    console.log("🚀 ~ loggerMiddleware next state", store.getState());
    return result;
  };
};

const middlewares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
