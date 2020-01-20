import { createStore } from "redux";

import ReducerCore from "modules/core/store/redurer";

const store = createStore(
  ReducerCore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
