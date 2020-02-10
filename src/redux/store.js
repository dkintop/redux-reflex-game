import { createStore } from "redux";

import { highScoreReducer } from "../reducers/appReducer.js";

let store = createStore(
  highScoreReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
