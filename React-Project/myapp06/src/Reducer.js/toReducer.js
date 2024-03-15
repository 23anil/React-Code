let initial = {
  data: null,
  error: null,
};

let reducer = (state = initial, action) => {
  switch (action.type) {
    case "Resolve":
      return { ...state, data: action.payload };

      case "Reject":
        return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default reducer;