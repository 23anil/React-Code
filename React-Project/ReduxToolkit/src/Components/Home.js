import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Home() {
  let users=useSelector((state)=>state.reducer.users)
  console.log(users);
  return (
    <Container >
      <div className="d-falex">
        <h1 style={{ width: "41vw" }} className="align-items-center justify-content-center">Todo List Redux Toolkit</h1>
        <input/>
        <Button variant="warning" className="ms-2 mb-1">Add</Button> 
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Button variant="primary" className="me-2">Edit</Button> 
                <Button variant="danger">Delete</Button> 
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Home;
