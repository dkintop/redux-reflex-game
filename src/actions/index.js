export const addHighScore = score => {
  return dispatch => {
    return fetch("http://localhost:3000/games", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ game: score })
    })
      .then(resp => resp.json())
      .then(score => {
        dispatch({ type: "ADD_HIGHSCORE", payload: score });
      });
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

export const startGame = () => {
  return dispatch => {
    return dispatch({ type: "START_GAME", payload: true });
  };
};

export const resetGame = () => {
  return dispatch => {
    dispatch({
      type: "RESET_GAME",
      payload: false
    });
  };
};
