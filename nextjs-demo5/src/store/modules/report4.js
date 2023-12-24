


export default {
  name: "report4",
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