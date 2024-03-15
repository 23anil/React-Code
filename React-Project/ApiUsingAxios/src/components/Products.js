// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddProducts from "./AddProducts";
import EditProducts from "./EditProducts";
import http from "../axiosConfig";

function Products() {
  const [retriveProducts, setretriveProducts] = useState([]);
  const [addshow, setaddshow] = useState(false);
  const [editshow, seteditshow] = useState(false);
  const [selectproduct, setselectdata] = useState({});

  let fetchProducts = async () => {
    let Product = await  http.get("/products/products");
    setretriveProducts(Product.data.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  let showAdd = () => {
    setaddshow(false);
  };

  let editshowmodel = () => {
    seteditshow(false);
  };
  let selectdata = (val) => {
    setselectdata(val);
    seteditshow(true);
  };

  let productDelete = async (id) => {
    console.log(id);
    try {
      let resopnse = await http.delete(
        `/products/delete-product/${id}`
      );

      if (resopnse.data.error) {
        alert(resopnse.data.message);
      } else {
        alert(resopnse.data.message);
        fetchProducts();
      }
    } catch (err) {
      console.log("err", err);
    }
  };

 

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Product Description</th>
            <th>
              <Button
                variant="warning"
                onClick={() => {
                  setaddshow(true);
                }}
              >
                Add Prod +
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {retriveProducts.map((val) => {
            return (
              <tr key={val._id}>
                <td>{val._id}</td>
                <td>{val.pName}</td>
                <td>{val.pPrice}</td>
                <td>
                  <img
                    src={val.pImg}
                    alt={val.pName}
                    height={"250px"}
                    width={"250px"}
                  />
                </td>
                <td>{val.pDesc}</td>
                <td>
                  <Button
                    className="me-2"
                    onClick={() => {selectdata(val)}}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      productDelete(val._id);
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
      <AddProducts
        addshow={addshow}
        showAdd={showAdd}
        fetchProducts={fetchProducts}
      />
      <EditProducts
        editshow={editshow}
        editshowmodel={editshowmodel}
        fetchProducts={fetchProducts}
        selectproduct={selectproduct}
      />
    </div>
  );
}

export default Products;
