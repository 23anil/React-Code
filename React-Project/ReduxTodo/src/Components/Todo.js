import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, alldelete, deleteTodo } from "../Action/action";

function Todo() {
  const [todoData, settodoData] = useState("");
  let dispatch = useDispatch();

  let todoFromStore = useSelector((state) => state.list);
  console.log(todoFromStore);

  return (
    <div>
      <h2>Todo app using Redux</h2>
      <input
        type="text"
        placeholder="Enter Todo"
        value={todoData}
        onChange={(e) => {
          settodoData(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(todoData), settodoData(""));
        }}
      >
        Add Todo
      </button>

      <h3>Todolist </h3>
      {todoFromStore.map((val, idx) => {
        return (
          <div key={idx}>
            <li>{val}</li>
            <button>Edit</button>
            <button
              onClick={() => {
                dispatch(deleteTodo(idx));
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      {todoFromStore.length > 0 && (
        <button
          onClick={() => {
            dispatch(alldelete());
          }}
        >
          Delete All
        </button>
      )}
    </div>
  );
}

export default Todo;
