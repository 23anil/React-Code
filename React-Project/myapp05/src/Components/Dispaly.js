import React from 'react'
import { Table } from 'react-bootstrap'

function Dispaly(props) {
    console.log("dispaly data",props.validateduserdata);
  return (
    <>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>E-Mail ID</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        
      </tbody>
    </Table>
    </>
  )
}

export default Dispaly