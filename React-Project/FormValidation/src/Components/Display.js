import React from "react";
import { Table } from "react-bootstrap";

function Display({ userdata }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((val) => {
            return (
              <tr>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.age}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Display;
