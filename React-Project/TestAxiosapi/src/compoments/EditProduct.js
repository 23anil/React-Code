import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function EditProduct(props) {
  const [adddata, setadddata] = useState({
    pName: "",
    pPrice: "",
    pImg: "",
    pDesc: "",
  });

  let update = (event) => {
    setadddata({
      ...adddata,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setadddata({ ...props.selectProduct });
  }, [props.selectProduct]);

  let dataupadte = async () => {
    try {
      let setdata = await axios.put(
        `https://p-9x7e.onrender.com/products/edit-product/${adddata._id} `,
        adddata
      );

      if (setdata.data.message) {
        alert(setdata.data.message);
      } else {
        alert(setdata.data.message);
       
      }
      props.fetchproducts();
      props.Editshowhide();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Modal show={props.editshow} onHide={props.Editshowhide}>
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
              value={adddata.pName}
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
              value={adddata.pPrice}
              onChange={(event) => {
                update(event);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Img</Form.Label>
            <Form.Control
              type="url"
              placeholder="Product Img"
              name="pImg"
              value={adddata.pImg}
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
              value={adddata.pDesc}
              onChange={(event) => {
                update(event);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.Editshowhide}>
            Close
          </Button>
          <Button variant="primary" onClick={dataupadte}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditProduct;
