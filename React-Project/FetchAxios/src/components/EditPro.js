import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
function EditPro(props) {
  const [Editdata, setEditdata] = useState({
    pName: "",
    pPrice: "",
    pImg: "",
    pDesc: "",
  });

  let update = (event) => {
    setEditdata({
      ...Editdata,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setEditdata({ ...props.selectPro });
  }, [props.selectPro]);

  let putdata = async () => {
    try {
      let responce = await axios.put(`https://p-9x7e.onrender.com/products/edit-product/${Editdata._id}`, Editdata );
      if (responce.data.error) {
        alert(responce.data.message);
      } else {
        alert(responce.data.message);
      }
      props.fetchdata();
      props.hideEdit();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Modal show={props.EditShow} onHide={props.hideEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              name="pName"
              value={Editdata.pName}
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
              value={Editdata.pPrice}
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
              value={Editdata.pImg}
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
              value={Editdata.pDesc}
              onChange={(event) => {
                update(event);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hideEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={putdata}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditPro;
