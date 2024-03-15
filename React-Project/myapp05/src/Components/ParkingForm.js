import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Dispaly from "./Dispaly";

function ParkingForm() {
  const [validateduserdata, setvalidateduserdata] = useState({
    Name: "",
    Email: "",
    Age: "",
  });

  let update = (event) => {
    setvalidateduserdata({
      ...validateduserdata,
      [event.target.name]: event.target.value,
    });
  };

  const [validName, setvalidName] = useState("");
  const [validemail, setvalidemail] = useState("");
  const [validAge, setvalidAge] = useState("");
  let { Name, Email, Age } = validateduserdata;

  function namevalidate(){
    if (Name) {
        if (/^([a-zA-Z][a-zA-Z ]*)$/.test(Name)) {
          setvalidName(" ");
          return true;
        } else {
          setvalidName("Name Invalid");
        }
      } else {
        setvalidName("Name Required");
      }
}

function validateEmail(){

    if (Email) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
          setvalidemail("");
          return true;
        } else {
          setvalidemail("Email Invalid");
        }
      } else {
        setvalidemail("Email Required");
      }
}

function validateAge(){
    if (Age) {
        if (Age > 0 && Age < 150) {
          setvalidAge("");
          return true;
        } else {
          setvalidAge("Invalid age");
        }
      } else {
        setvalidAge("Age Required");
      }
}

  let validaAll = () => {
     namevalidate();
    validateEmail();
    validateAge() ;
  };

  return (
    <>
      <div className="container text-center w-25">
        <h1>Parking Form</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="Name"
            value={validateduserdata.Name}
            onChange={(event) => {
              update(event);
            }}
          />
          {validName && <p style={{ color: "red" }}>{validName}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>E-mail </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="Email"
            value={validateduserdata.Email}
            onChange={(event) => {
              update(event);
            }}
          />
          {validemail && <p style={{ color: "red" }}>{validemail}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Age"
            name="Age"
            value={validateduserdata.Age}
            onChange={(event) => {
              update(event);
            }}
          />
          {validAge && <p style={{ color: "red" }}>{validAge}</p>}
        </Form.Group>
        <Button variant="primary" className="mt-2 mb-2" onClick={validaAll}>
          Submit
        </Button>
      </div>
       <Dispaly validateduserdata={validateduserdata}/>
      
    </>
  );
}

export default ParkingForm;
