import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "./Userreducer";


function Create() {
  const [name, setname] = useState("");
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const handelSubmit = (event) => {
    event.preventDefault();
    // dispatch(adduser({id:users[users.length-1].id+1 ,name,}))
  };
  return (
    <div>
      <h1>Add User Data</h1>
      <form
        className="d-flex  align-items-center justify-content-center"
        onSubmit={handelSubmit}
      >
        <div className="mb-3 w-50 d-flex mt-5 border p-2">
          <input
            type="text"
            className="form-control ms-1"
            id="exampleInputEmail1"
            placeholder="Enter Your Name"
            name="name"
            onChange={(e) => setname(e.target.value)}
          />
          <button type="submit" className="btn btn-primary ms-3 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
