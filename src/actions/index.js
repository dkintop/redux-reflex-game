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
        let sortedScores = scores.sort(function(a, b) {
          if (a.score - b.score > 0) {
            return 1;
          } else {
            return -1;
          }
        });
        dispatch({ type: "GET_HIGHSCORES", payload: sortedScores });
      });
  };
};
