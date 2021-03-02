import { createStore, applyMiddleware, compose  } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

const initialState = {};
const middlewares = [thunk];

let devtools;
if (
    process.env.NODE_ENV !== "production" &&
    process.browser &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
  }

 /* eslint-disable no-underscore-dangle */
  export const Store = createStore(
    RootReducer,
    initialState,
    compose(applyMiddleware(...middlewares), 
    devtools)
  
  );

  