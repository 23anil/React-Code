import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function UserForm(props) {
  const [namerrror, setnamerrror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [ageerror, setageerror] = useState("");

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    age: "",
  });

  let update = (event) => {
    setformdata({
      ...formdata,
      [event.target.name]: event.target.value,
    });
  };

  let { name, email, age } = formdata;

  let validatename = () => {
    if (name) {
      let rezex = /^[a-zA-Z]{2,30}$/;
      if (rezex.test(name)) {
        setnamerrror("");
        return true;
      } else {
        setnamerrror("Invalid Name");
      }
    } else {
      setnamerrror("required Name");
    }
  };

  let validateemail = () => {
    if (email) {
      let rizex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (rizex.test(email)) {
        setemailerror("");
        return true;
      } else {
        setemailerror("Invalid Email");
      }
    } else {
      setemailerror("required Eamil");
    }
  };

  let validateAge = () => {
    if (age) {
      if (age > 0 && age < 150) {
        setageerror("");
        return true;
      } else {
        setageerror("Invalid age");
      }
    } else {
      setageerror("required age");
    }
  };

  let vatidateall = () => {
    if (validatename() && validateemail() && validateAge()) {
      props.getuserdata(formdata);
      setformdata({
        ...formdata,
        name: "",
        email: "",
        age: "",
      });
    }
  };

  return (
    <div>
      <div className="w-25 m-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formdata.name}
            onChange={(event) => {
              update(event);
            }}
          />
          {namerrror && <p style={{ color: "red" }}>*{namerrror}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formdata.email}
            onChange={(event) => {
              update(event);
            }}
          />
          {emailerror && <p style={{ color: "red" }}>*{emailerror}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            name="age"
            value={formdata.age}
            onChange={(event) => {
              update(event);
            }}
          />
          {ageerror && <p style={{ color: "red" }}>*{ageerror}</p>}
        </Form.Group>
        <Button variant="primary" type="button" onClick={vatidateall}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default UserForm;
