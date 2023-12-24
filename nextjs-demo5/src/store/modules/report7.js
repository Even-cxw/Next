

/**
 * @desc reducers更新sate
 * 1. state：存放模块状态的地方。
 * 2. reducers：改变store状态的地方  *注意*⚠️ 必须return个新对象作为新的state
 */
export default {
  name: "report7",
  state: {
    count: 0,
    age: 4,
    name: 'Even',
    gender: '男' 
  },
  reducers: {
    updataState(state, payload) {
      return {
        ...state,
        ...payload
      }
    }
  },
}