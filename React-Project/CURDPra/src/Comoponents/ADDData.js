import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function ADDData(props) {
  const [Adddata, setAdddata] = useState({
    pName: "",
    pPrice: "",
    pImg: "",
    pDesc: "",
  });

  let update = (event) => {
    setAdddata({
      ...Adddata,
      [event.target.name]: event.target.value,
    });
  };

  let AddProducts = async () => {
    try {
      let data = await axios.post(
        "https://p-9x7e.onrender.com/products/add-product",
        Adddata
      );
      if (data.data.error) {
        alert (data.data.message);
      } else {
        alert (data.data.message);
      }
      props.fetchdata();
      props.setshowAdd(false);
      setAdddata({
        ...Adddata,
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
        show={props.showAdd}
        onHide={() => {
          props.setshowAdd(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Products Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Products Name"
              value={Adddata.pName}
              name="pName"
              onChange={(e) => {
                update(e);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Products Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Products Price"
              value={Adddata.pPrice}
              name="pPrice"
              onChange={(e) => {
                update(e);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Products Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Products Image"
              value={Adddata.pImg}
              name="pImg"
              onChange={(e) => {
                update(e);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Products pDesc</Form.Label>
            <Form.Control
              type="text"
              placeholder="Products Desc"
              value={Adddata.pDesc}
              name="pDesc"
              onChange={(e) => {
                update(e);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              props.setshowAdd(false);
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={AddProducts}>
            To Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ADDData;
