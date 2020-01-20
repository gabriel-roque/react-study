import { createStore } from "redux";
import { combineReducers } from "redux";

import todo from "modules/todo/store/redurer";
import chat from "modules/chat/store/reducer";

// New modules insert here
const reducers = combineReducers({
  todo,
  chat
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
