export default function highScoreReducer(state = [], action) {
  switch (action.type) {
    case "ADD_HIGHSCORE":
      return [...state, action.payload];

    case "GET_HIGHSCORES":
      return [...action.payload];
    default:
      return state;
  }
}

//this reducer responsible for maintaining list of highscores.
