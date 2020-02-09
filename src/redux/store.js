import { createStore } from "redux";

function appReducer(
  state = {
    highScores: [
      { name: "Doug", score: 0.5 },
      { name: "Milo", score: 0.9 },
      { name: "these are currently stubs", score: 123 }
    ]
  },
  action
) {
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
