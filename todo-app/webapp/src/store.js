import { createStore } from "redux";
import { combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import todo from "modules/todo/store/redurer";
import chat from "modules/chat/store/reducer";

// New modules insert here
const reducers = combineReducers({
  todo,
  chat
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
