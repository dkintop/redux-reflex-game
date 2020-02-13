export default function gameReducer(
  state = { score: "", initialized: false, showForm: false },
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
        score: "",
        showForm: false,
        initialized: action.payload
      };

    case "RECORD_SCORE":
      return {
        ...state,
        score: action.payload
      };

    case "SHOW_FORM":
      return {
        ...state,
        showForm: action.payload
      };

    default:
      return state;
  }
}
