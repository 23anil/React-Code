import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddProducts(props) {
  const [addproddata, setaddproddata] = useState({
    pName: "",
    pPrice: "",
    pDesc: "",
    pImg: "",
  });

  let updateDetails = (event) => {
    setaddproddata({
      ...addproddata,
      [event.target.name]: event.target.value,
    });
  };

  let savedata = async () => {
    try {
      let Resopnse = await axios.post(
        " https://p-9x7e.onrender.com/products/add-product",
        addproddata
      );
    //   console.log("Resopnse",Resopnse);
     if(Resopnse.data.error){
        alert(Resopnse.data.message)
     }
     else{
        alert(Resopnse.data.message)
        setaddproddata({
            ...addproddata,
            pName: "",
            pPrice: "",
            pDesc: "",
            pImg: "",
        })
     }
     props.showAdd();
      props.fetchProducts();
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div>
      <Modal show={props.addshow} onHide={props.showAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Product Name"
              name="pName"
              value={addproddata.pName}
              onChange={(event) => {
                updateDetails(event);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Product Price"
              name="pPrice"
              value={addproddata.pPrice}
              onChange={(event) => {
                updateDetails(event);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="email"
              placeholder="Product Image"
              name="pImg"
              value={addproddata.pImg}
              onChange={(event) => {
                updateDetails(event);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Desc</Form.Label>
            <Form.Control
              type="email"
              placeholder="Product Desc"
              name="pDesc"
              value={addproddata.pDesc}
              onChange={(event) => {
                updateDetails(event);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.showAdd}>
            Close
          </Button>
          <Button variant="primary" onClick={savedata}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddProducts;
