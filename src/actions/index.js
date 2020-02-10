export const addHighScore = score => {
  return {
    type: "ADD_HIGHSCORE",
    payload: score
  };
};
