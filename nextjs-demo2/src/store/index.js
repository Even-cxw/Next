import { init } from "@rematch/core";
// import * as models from './models'
import count from './models/count';
console.log('count', count)
const store = init({
  // models: {models},
  models: {
    count,
    setting: {state: {age: 2}}
  }
});

export default store;