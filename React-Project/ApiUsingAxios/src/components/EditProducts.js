import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function EditProducts(props) {
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

  useEffect(() => {
    setaddproddata({ ...props.selectproduct });
  }, [props.selectproduct]);

  let savedata = async () => {
    try {
      let resopnse = await axios.put(`https://p-9x7e.onrender.com/products/edit-product/${addproddata._id}`,addproddata
      );
     if(resopnse.data.error){
        alert(resopnse.data.message)
     }
     else{
        alert(resopnse.data.message);
        props.editshowmodel();
        props.fetchProducts();
     }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div>
      <Modal show={props.editshow} onHide={props.editshowmodel}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Products</Modal.Title>
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
          <Button variant="secondary" onClick={props.editshowmodel}>
            Close
          </Button>
          <Button variant="primary" onClick={savedata}>
            Edit Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditProducts;
