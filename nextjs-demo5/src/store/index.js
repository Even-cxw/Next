//store.jsx
"use client";
import { Provider } from "react-redux";
import { init} from "@rematch/core";
import report1 from './modules/report1'
import report2 from './modules/report2'
import report3 from './modules/report3'
import report4 from './modules/report4'
import report5 from './modules/report5'
import report6 from './modules/report6'
import report7 from './modules/report7'
import report8 from './modules/report8'


export const store = init({
  models: { 
    report1,
    report2,
    report3,
    report4,
    report5,
    report6,
    report7,
    report8,
  }
});

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

