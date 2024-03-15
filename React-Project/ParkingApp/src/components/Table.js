import React from "react";

function Table(props) {
  console.log("props", props);
  return (
    <div>
      <h1>List of Vehical</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">owner name</th>
            <th scope="col">Vehical No</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {props.allformdata.map((val, idx) => {
            return (
              <tr key={idx}>
                <td>{val.ownername}</td>
                <td>{val.vNo}</td>
                <td>{val.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
