let initial=0;
let reducer = (state = initial, action) => {
  switch (action.type) {
    case "increment":
      return  state + action.payload ;

    case "decrement":
      return state - action.payload ;

    case "reset":
      return  state=initial;

    default:
      return state;
  }
};

export default reducer;
