import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function EditData(props) {
  const [editdata, seteditdata] = useState({
    pName: "",
    pPrice: "",
    pImg: "",
    pDesc: "",
  });

  let update = (event) => {
    seteditdata({
      ...editdata,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    seteditdata({ ...props.SelectData });
  }, [props.SelectData]);

  let EditPro = async () => {
    try {
      let response = await axios.put(
        `https://p-9x7e.onrender.com/products/edit-product/${editdata._id}`,
        editdata
      );
      if (response.data.error) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
      props.getdata();
      props.seteditpage(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal
        show={props.editpage}
        onHide={() => {
          props.seteditpage(false);
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              name="pName"
              value={editdata.pName}
              onChange={(event) => {
                update(event);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="number"
              placeholder="Product Price"
              name="pPrice"
              value={editdata.pPrice}
              onChange={(event) => {
                update(event);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Img"
              name="pImg"
              value={editdata.pImg}
              onChange={(event) => {
                update(event);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product pDesc"
              name="pDesc"
              value={editdata.pDesc}
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
              props.seteditpage(false);
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={EditPro}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditData;
