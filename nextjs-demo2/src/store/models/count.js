export default {
  name: 'count',
  state: {
    num: 1
  },
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  }
}