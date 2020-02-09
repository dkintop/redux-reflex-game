import { createStore } from "redux";

function appReducer(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

let store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
