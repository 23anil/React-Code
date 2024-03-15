import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import ADDData from "./ADDData";
import EditData from "./EditData";

function Products() {
  const [pro, setpro] = useState([]);
  const [showAdd, setshowAdd] = useState(false);
  const [selectPro, setselectPro] = useState({})
  const [editShow, seteditShow] = useState(false)

  let fetchdata = async () => {
    let data = await axios.get("https://p-9x7e.onrender.com/products/products");
    setpro(data.data.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  let deletedata = async (id) => {
    try {
      let datadelete = await axios.delete(
        `https://p-9x7e.onrender.com/products/delete-product/${id} `
      );
      if(datadelete.data.error)
      {
        alert(datadelete.data.message)
      }
      else{
        alert(datadelete.data.message)
      }
      fetchdata();
    } catch (error) {
      console.log(error);
    }
  };

  let sendselect=(val)=>{
    setselectPro(val)
    seteditShow(true)
  }
  return (
    <div className="m-3">
      <h1>Show Products</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Pro Name</th>
            <th>Pro Price</th>
            <th>Pro Image</th>
            <th>Pro Desc</th>
            <th>
              <Button
                variant="warning"
                onClick={() => {
                  setshowAdd(true);
                }}
              >
                Add.
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {pro.map((val) => {
            return (
              <tr>
                <td>{val._id}</td>
                <td>{val.pName}</td>
                <td>{val.pPrice}</td>
                <td>
                  <img
                    src={val.pImg}
                    alt={val.pName}
                    height={"150px"}
                    width={"150px"}
                  />
                </td>
                <td>{val.pDesc}</td>
                <td>
                  <Button variant="primary" className="me-2" onClick={()=>{sendselect(val)}}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deletedata(val._id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ADDData
        showAdd={showAdd}
        setshowAdd={setshowAdd}
        fetchdata={fetchdata}
      />
      <EditData  editShow={editShow} seteditShow={seteditShow} selectPro={selectPro} fetchdata={fetchdata}/>
    </div>
  );
}

export default Products;
