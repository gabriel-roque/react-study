import { createStore } from "redux";

import reducer from "./redurer";

// const INITIAL_STATE = {
//   tasks: [
//     {
//       desc: "Using Redux",
//       complete: false
//     },
//     {
//       desc: "Refector a code",
//       complete: false
//     }
//   ]
// };

// function reducer(state = INITIAL_STATE, action) {
//   if (action.type === "COMPLETE_TASK") {
//     state.tasks.map((task, i) => {
//       if (task.desc === action.task.desc) {
//         state.tasks[i].complete = true;
//       }
//     });
//     return {
//       tasks: [...state.tasks]
//     };
//   }

//   return state;
// }

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
