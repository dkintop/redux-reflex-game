export function highScoreReducer(
  state = [
    { name: "Doug", score: 0.1, id: 1 },
    { name: "Doug", score: 0.1, id: 1 },
    { name: "Doug", score: 0.1, id: 1 },
    { name: "Doug", score: 0.1, id: 1 },
    { name: "Doug", score: 0.1, id: 1 },
    { name: "Doug", score: 0.1, id: 1 },
    { name: "Doug", score: 0.1, id: 1 },
    { name: "Doug", score: 0.1, id: 1 },
    { name: "Doug", score: 0.1, id: 1 },
    { name: "Doug", score: 0.1, id: 1 },
    { name: "Doug", score: 0.1, id: 1 },
    { name: "Doug", score: 0.1, id: 1 },
    { name: "Doug", score: 0.1, id: 1 }
  ],
  action
) {
  switch (action.type) {
    case "ADD_HIGHSCORE":
      return [...state, action.payload];

    default:
      return state;
  }
}
