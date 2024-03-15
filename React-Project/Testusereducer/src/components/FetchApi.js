import React, { useEffect, useReducer } from "react";

let value = [];

let reducer = (prevState, action) => {
  switch (action.type) {
    case "success":
      return [...action.payload];
    default:
      return prevState;
  }
};
console.log("value", value);
function FetchApi() {
  const [state, dispatch] = useReducer(reducer, value);
  console.log("state", state);
  let fetch01 = async () => {
    let respons = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await respons.json();
    dispatch({ type: "success", payload: data });
  };
  console.log("state", state);
  useEffect(() => {
    fetch01();
    console.log("fetch01", fetch01());
  }, []);

  return (
    <div>
      {state.map((value, index) => {
        return <li key={index}>{value.name}</li>;
      })}
    </div>
  );
}

export default FetchApi;
