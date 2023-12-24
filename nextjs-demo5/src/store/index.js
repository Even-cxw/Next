//store.jsx
"use client";
import { Provider } from "react-redux";
import { init} from "@rematch/core";
import report1 from './modules/report1'
import report2 from './modules/report2'
import report3 from './modules/report3'
import report4 from './modules/report4'


export const store = init({
  models: { 
    report1,
    report2,
    report3,
    report4,
  }
});

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

