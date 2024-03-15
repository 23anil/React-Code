import React, {  useReducer } from "react";

function FetchReducer(props) {
  let initial = null;
  let reducer = (state, action) => {
    switch (action.type) {
      case "solve":
        return (state = action.payload);
      case "Notsolve":
        return (state = action.payload);
      default:
        return state;
    }
  };

  let fetchdata = async () => {
    try {
      let resolve = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await resolve.json();
      dispatch({ type: "solve", payload: data });
    } catch (error) {
      dispatch({ type: "Notsolve", payload: error.message });
    }
  };

  const [data, dispatch] = useReducer(reducer, initial);
  console.log(data);
  return <div>
    <button onClick={fetchdata}>fetch</button>
  </div>;
}

export default FetchReducer;
