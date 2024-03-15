let initialstate = {
  list: [],
};

let toReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "Add_Todo":
      return { list: [...state.list, action.payload] };

    case "tododelete":
      state.list.splice(action.payload, 1);
      return { list: [...state.list] };

    case "deleteAll":
      return { list: [] };
      
    default:
      return state;
  }
};
export default toReducer;
