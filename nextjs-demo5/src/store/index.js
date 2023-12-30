//store.jsx
"use client";
import { Provider } from "react-redux";
import { init} from "@rematch/core";
import layout from "./modules/layout";
export const store = init({
  models: { 
    layout,
  }
});

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

