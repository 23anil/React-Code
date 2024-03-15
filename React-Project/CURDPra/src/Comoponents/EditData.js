import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function EditData(props) {
  const [editdata, setEditdata] = useState({
    pName: "",
    pPrice: "",
    pImg: "",
    pDesc: "",
  });

  let update = (event) => {
    setEditdata({
      ...editdata,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setEditdata({ ...props.selectPro });
  }, [props.selectPro]);

  let dataedit = async () => {
    try {
      let Edata = await axios.put(
        `https://p-9x7e.onrender.com/products/edit-product/${editdata._id} `,
        editdata
      );

      if (Edata.data.error) {
        alert(Edata.data.message);
      } else {
        alert(Edata.data.message);
      }
      props.seteditShow(false);
      props.fetchdata();
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log("Editdata",Editdata);
  return (
    <div>
      <Modal
        show={props.editShow}
        onHide={() => {
          props.seteditShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Products Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Products Name"
              value={editdata.pName}
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
              value={editdata.pPrice}
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
              value={editdata.pImg}
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
              value={editdata.pDesc}
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
              props.seteditShow(false);
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={dataedit}>
            To Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditData;
