

export const count = {
  name: 'count',
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state:number, payload:number) {
      return state + payload
    }
  },
}