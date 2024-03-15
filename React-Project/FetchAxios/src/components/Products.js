import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import AddPro from "./AddPro";
import EditPro from "./EditPro";

function Products() {
  const [readdata, setreaddata] = useState([]);
  const [selectPro, setselectPro] = useState({});
  const [AddShow, setAddShow] = useState(false);
  const [EditShow, setEditShow] = useState(false);

  let fetchdata = async () => {
    let resolve = await axios.get(
      "https://p-9x7e.onrender.com/products/products"
    );
    setreaddata(resolve.data.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  let hideadd = () => {
    setAddShow(false);
  };

  let hideEdit = () => {
    setEditShow(false);
  };

  let selectdata = (data) => {
    setselectPro(data);
    setEditShow(true);
  };

  let deletedata = async (id) => {

   
    try {
      let responce = await axios.delete(`https://p-9x7e.onrender.com/products/delete-product/${id}`);
      if (responce.data.error) {
        alert(responce.data.message);
      } else {
        alert(responce.data.message);
      }
    fetchdata();
     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Parice</th>
            <th>Product Img</th>
            <th>Product Desc</th>
            <th>
              <Button
                variant="warning"
                onClick={() => {
                  setAddShow(true);
                }}
              >
                Add.Pro
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {readdata.map((val) => {
            return (
              <tr key={val._id}>
                <td>{val._id}</td>
                <td>{val.pName}</td>
                <td>{val.pPrice}</td>
                <td>
                  <img
                    src={val.pImg}
                    alt={val.pName}
                    height={"200px"}
                    width={"200px"}
                  />
                </td>
                <td>{val.pDesc}</td>
                <td>
                  <Button
                    variant="primary"
                    className="me-2"
                    onClick={() => {
                      selectdata(val);
                    }}
                  >
                    Edit
                  </Button>
                  <Button variant="danger" onClick={()=>{deletedata(val._id)}}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AddPro AddShow={AddShow} hideadd={hideadd} fetchdata={fetchdata} />
      <EditPro
        EditShow={EditShow}
        selectPro={selectPro}
        hideEdit={hideEdit}
        fetchdata={fetchdata}
      />
    </div>
  );
}

export default Products;
