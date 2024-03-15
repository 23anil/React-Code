import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
function AddPro(props) {
  const [addData, setaddData] = useState({
    pName: "",
    pPrice: "",
    pImg: "",
    pDesc: "",
  });

  let update = (event) => {
    setaddData({
      ...addData,
      [event.target.name]: event.target.value,
    });
  };

  let setdata = async () => {
    try {
      let responce = await axios.post(
        "https://p-9x7e.onrender.com/products/add-product  ",
        addData
      );
      if (responce.data.error) {
        alert(responce.data.message);
      } else {
        alert(responce.data.message);

        setaddData({
          ...addData,
          pName: "",
          pPrice: "",
          pImg: "",
          pDesc: "",
        });
      }
      props.fetchdata();
      props.hideadd();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Modal show={props.AddShow} onHide={props.hideadd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              name="pName"
              value={addData.pName}
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
              value={addData.pPrice}
              onChange={(event) => {
                update(event);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Img</Form.Label>
            <Form.Control
              type="url"
              placeholder="Product Img URL"
              name="pImg"
              value={addData.pImg}
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
              value={addData.pDesc}
              onChange={(event) => {
                update(event);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hideadd}>
            Close
          </Button>
          <Button variant="primary" onClick={setdata}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddPro;
