"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterReducer from "./modules/counterSlice";

/**
 * @desc @reduxjs/toolkit依赖
 * @combineReducers 用于将多个 reducer 合并成一个根 reducer
 * @configureStore 用于创建 Redux store
 */
const rootReducer = combineReducers({
  //conter: redux name
  counter: counterReducer,
  //add all your reducers here
});

// @configureStore 用于创建 Redux store
export const store = configureStore({
  reducer: rootReducer,
});

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
