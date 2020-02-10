export const addHighScore = score => {
  return {
    type: "ADD_HIGHSCORE",
    payload: score
  };
};

export const fetchScores = () => {
  return dispatch => {
    return fetch("http://localhost:3000/games")
      .then(resp => resp.json())
      .then(scores => {
        dispatch({ type: "GET_HIGHSCORES", payload: scores });
      });
  };
};
