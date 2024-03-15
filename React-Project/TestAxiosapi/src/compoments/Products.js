import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddProducts from "./AddProducts";
import EditProduct from "./EditProduct";

function Products() {
  const [addshow, setaddshow] = useState(false);
  const [editshow, seteditshow] = useState(false);

  const [getproducts, setgetproducts] = useState([]);

  const [selectProduct, setselectProduct] = useState({});

  let fetchproducts = async () => {
    let data = await axios.get("https://p-9x7e.onrender.com/products/products");
    setgetproducts(data.data.data);
  };

  let deletedata = async (id) => {
    try {
      let deletedata = await axios.delete(
        ` https://p-9x7e.onrender.com/products/delete-product/${id} `
      );

      if (deletedata.data.message) {
        alert(deletedata.data.message);
      } else {
        alert(deletedata.data.message);
      }
      fetchproducts();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  let addshowhide = () => {
    setaddshow(false);
  };

  let Editshowhide = () => {
    seteditshow(false);
  };

  let selectItem = (data) => {
    setselectProduct(data);
    seteditshow(true);
  };

  return (
    <div className="">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Products Name</th>
            <th>Products Price</th>
            <th>Products Image</th>
            <th>Products Desc</th>
            <th>
              <Button
                variant="warning"
                onClick={() => {
                  setaddshow(true);
                }}
              >
                Add.pro
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {getproducts.map((val) => {
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
                      selectItem(val);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deletedata(val._id);
                    }}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AddProducts
        addshow={addshow}
        addshowhide={addshowhide}
        fetchproducts={fetchproducts}
      />
      <EditProduct
        editshow={editshow}
        Editshowhide={Editshowhide}
        fetchproducts={fetchproducts}
        selectProduct={selectProduct}
      />
    </div>
  );
}

export default Products;
