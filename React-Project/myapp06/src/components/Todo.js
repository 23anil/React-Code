import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "../Action.js/action";

function Todo() {
  let dispatch = useDispatch();
  let { data, error } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchdata());
  }, []);
  console.log("data", data);
  console.log("error", error);
  return <div>{data && data.map((val) => <p key={val.id}>{val.name}</p>)}</div>;
}

export default Todo;
