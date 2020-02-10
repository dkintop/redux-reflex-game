export default function gameReducer(
  state = { score: null, initialized: false },
  action
) {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        initialized: action.payload
      };

    case "RESET_GAME":
      return {
        ...state,
        initialized: action.payload
      };
    default:
      return state;
  }
}
