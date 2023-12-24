
import { dispatch } from '@rematch/core';
import {apiLoad} from '@/api/report'
/**
 * @desc reducers更新sate
 * 1. state：存放模块状态的地方。
 * 2. reducers：改变store状态的地方  *注意*⚠️ 必须return个新对象作为新的state
 */
export default {
  name: "report5",
  state: {
    count: 0,
    age: 0,
    name: '',
    gender: '' 
  },
  reducers: {
    updataState(state, payload) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: (dispatch) => ({
    async loadUser() {
      let res = await apiLoad()
      dispatch.report5.updataState(res)
    }
  })
}