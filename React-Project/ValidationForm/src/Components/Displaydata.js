import React from "react";

function Displaydata(props) {
  return (
    <div>
      <h3>Details of Users</h3>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {props.formdata.map((val, idx) => {
            return (
              <tr key={idx}>
                <td>{val.Firstname}</td>
                <td>{val.Lastname}</td>
                <td>{val.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Displaydata;
