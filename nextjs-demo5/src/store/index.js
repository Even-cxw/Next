//store.jsx
"use client";
import { Provider } from "react-redux";
import { init} from "@rematch/core";

// 模拟接口
let api = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12)
    }, 1000)
  })
}

// 模块一
const report = {
  name: "report",
  state: {count: 0},
  reducers: {
    updateCount: (state, payload) => {
      console.log('state', state);
      console.log('payload', payload);
      return {
        ...state,
        count: state.count + payload
      }
    },
  },
  effects: (dispatch) =>({
    async loadDatta(payload, rootState) {
      await api().then(res => {
        dispatch.report.updateCount(res)
      })
    }
  })
}

export const store = init({
  models: { report }
});

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

