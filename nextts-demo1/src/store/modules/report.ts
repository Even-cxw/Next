export const report = {
  name: 'report',
  state: {
    name: 'Even',
    age: 12,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state:{name: string, age: number}, payload:number) {
      return {
        ...state,
        age: state.age + payload
      }
    }
  },
}