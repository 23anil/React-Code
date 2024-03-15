import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddProduts(props) {
  const [newdata, setnewdata] = useState({
    pName: "",
    pPrice: "",
    pImg: "",
    pDesc: "",
  });

  let update = (event) => {
    setnewdata({
      ...newdata,
      [event.target.name]: event.target.value,
    });
  };

  let adddata = async () => {
    try {
      let addproduct = await axios.post(
        "https://p-9x7e.onrender.com/products/add-product",
        newdata
      );
      if (addproduct.data.error) {
        alert(addproduct.data.message);
      } else {
        alert(addproduct.data.message);
      }
      props.getdata();
      props.setaddpage(false);
      setnewdata({
        ...newdata,
        pName: "",
        pPrice: "",
        pImg: "",
        pDesc: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        centered
        show={props.addpage}
        onHide={() => {
          props.setaddpage(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              name="pName"
              value={newdata.pName}
              onChange={(event) => {
                update(event);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Product Price"
              name="pPrice"
              value={newdata.pPrice}
              onChange={(event) => {
                update(event);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Img URL"
              name="pImg"
              value={newdata.pImg}
              onChange={(event) => {
                update(event);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Desc</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Desc"
              name="pDesc"
              value={newdata.pDesc}
              onChange={(event) => {
                update(event);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              props.setaddpage(false);
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={adddata}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddProduts;
