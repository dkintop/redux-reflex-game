import { combineReducers } from "redux";
import highScoreReducer from "./highScoreReducer.js";
import gameReducer from "./gameReducer.js";
export default combineReducers({
  highScoreReducer,
  gameReducer
});
