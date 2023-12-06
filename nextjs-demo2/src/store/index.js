import { init } from "@rematch/core";
// import * as models from './models'

const store = init({
  // models: {models},
  models: {count: {state: {num: 1}}}
});

export default store;