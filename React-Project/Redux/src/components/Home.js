import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser } from "./Userreducer";


function Home() {
  const users = useSelector((state) => state.users);

  console.log(users);
  const dispatch = useDispatch();

  const handelDelete = (id) => {
    dispatch(deleteuser({id:id}))
  };

  return (
    <div className="d-flex  align-items-center justify-content-center mt-2">
      <table className="table w-50 border ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((value, index) => (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => {
                    handelDelete(value.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
