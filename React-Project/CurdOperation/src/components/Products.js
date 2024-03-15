import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import AddProduts from "./AddProduts";
import EditData from "./EditData";

function Products() {
  const [products, setproducts] = useState([]);
  const [addpage, setaddpage] = useState(false);
  const [editpage, seteditpage] = useState(false)
  const [SelectData, setSelectData] = useState({})

  let getdata = async () => {
    try {
      let fetchdata = await axios.get(
        "https://p-9x7e.onrender.com/products/products"
      );
      setproducts(fetchdata.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  let deletedata = async (id) => {
    try {
      let deletepro = await axios.delete(
        `https://p-9x7e.onrender.com/products/delete-product/${id}`
      );
      if (deletepro.data.error) {
        alert(deletepro.data.message);
      } else {
        alert(deletepro.data.message);
      }
      getdata();
    } catch (error) {
      console.log(error);
    }
  };
  
  let edit=(editdata)=>{
    setSelectData(editdata) ;
    seteditpage(true);
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Product Desc</th>
            <th>
              <Button
                variant="warning"
                onClick={() => {
                  setaddpage(true);
                }}
              >
                Add Pro
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((val) => {
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
                  <Button variant="primary" onClick={()=>{edit(val)}}>Edit</Button>
                  <Button
                    variant="danger"
                    className="ms-2"
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
      <AddProduts addpage={addpage} setaddpage={setaddpage} getdata={getdata} />
      <EditData editpage={editpage} seteditpage={seteditpage} getdata={getdata} SelectData={SelectData}/>
    </div>
  );
}

export default Products;
