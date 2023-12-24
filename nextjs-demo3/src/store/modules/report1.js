

/**
 * @desc reducers更新sate
 * 1. state：存放模块状态的地方。
 * 2. reducers：改变store状态的地方  *注意*⚠️ 必须return个新对象作为新的state
 */
export default {
  name: "report1",
  state: {
    count: 0,
    age: 1,
    name: 'Even'
  },
  // 缺陷：reducers方法多的时候写起来比较麻烦
  reducers: {
    updateCount: (state, payload) => {
      return {
        ...state,
        count: state.count + payload
      }
    },
    updateAge: (state, payload) => {
      return {
        ...state,
        age: state.age + payload
      }
    },
  },
}