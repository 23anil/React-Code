import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registerpage() {
  let navigator = useNavigate();

  let moviepage = () => {
    navigator("/movies");
  }


  let Loginpage = () => {
    navigator("/Login");
  }

  const [Registerdata, setRegisterdata] = useState({
    name: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
  });

  const [NameError, setNameError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PhoneNumberError, setPhoneNumberError] = useState("");
  const [PasswordError, setPasswordError] = useState("");

  let update = (event) => {
    setRegisterdata({
      ...Registerdata,
      [event.target.name]: event.target.value,
    });
  };

  let validName = () => {
    if (Registerdata.name) {
      let rizex = /([a-zA-Z]{3,30}\s*)+/;
      if (rizex.test(Registerdata.name)) {
        setNameError("");
        return true;
      } else {
        setNameError("invalid Name");
      }
    } else {
      setNameError("Required Name");
    }
  };


  let validEmail = () => {
    if (Registerdata.Email) {
      let rizex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (rizex.test(Registerdata.Email)) {
        setEmailError("");
        return true;
      } else {
        setEmailError("invalid Email");
      }
    } else {
      setEmailError("Required Email");
    }
  };

  let validPhoneNumber = () => {
    if (Registerdata.PhoneNumber) {
      let rizex = /^([+]\d{2})?\d{10}$/;
      if (rizex.test(Registerdata.PhoneNumber)) {
        setPhoneNumberError("");
        return true;
      } else {
        setPhoneNumberError("invalid PhoneNumber");
      }
    } else {
      setPhoneNumberError("Required PhoneNumber");
    }
  };

  let validPassword = () => {
    if (Registerdata.Password) {
      let rizex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      if (rizex.test(Registerdata.Password)) {
        setPasswordError("");
        return true;
      } else {
        setPasswordError("invalid Password");
      }
    } else {
      setPasswordError("Required Password");
    }
  };

  let validateAll = () => {
    validName();
    validEmail();
    validPhoneNumber();
    validPassword();
    if(
    validName() &&
    validEmail()&&
    validPhoneNumber()&&
    validPassword())
    {
      moviepage();
    }
  };

  return (
    <div className="Register-page-background">
      <div className="container-fluid">
        <div className="row">
          <div className="Register-box col-12 col-sm-12 col-mg-12 col-lg-4 d-grid  justify-content-center">
            <div className="Register-label ms-3">Register</div>
            <div className="Register-fields" style={{ marginTop: "6rem" }}>
              <input
                type="text"
                placeholder="Name"
                className="w-100 h-100 bg-transparent border-0 text-white"
                name="name"
                value={Registerdata.name}
                onChange={(event) => {
                  update(event);
                }}
              />
              {NameError && <p style={{ color: "red" }}>{NameError}</p>}
            </div>
            <div className="Register-fields" style={{ marginTop: "11rem" }}>
              <input
                type="email"
                placeholder="E-mail"
                className="w-100 h-100 bg-transparent border-0 text-white"
                name="Email"
                value={Registerdata.Email}
                onChange={(event) => {
                  update(event);
                }}
              />
               {EmailError && <p style={{ color: "red" }}>{EmailError}</p>}
            </div>
            <div className="Register-fields" style={{ marginTop: "16rem" }}>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-100 h-100 bg-transparent border-0 text-white"
                name="PhoneNumber"
                value={Registerdata.PhoneNumber}
                onChange={(event) => {
                  update(event);
                }}
              />
               {PhoneNumberError && <p style={{ color: "red" }}>{PhoneNumberError}</p>}
            </div>
            <div className="Register-fields" style={{ marginTop: "21rem" }}>
              <input
                type="password"
                placeholder="Password"
                className="w-100 h-100 bg-transparent border-0 text-white"
                name="Password"
                value={Registerdata.Password}
                onChange={(event) => {
                  update(event);
                }}
              />
                {PasswordError && <p style={{ color: "red" }}>{PasswordError}</p>}
            </div>
           
            <button
              type="button"
              className="register-btn"
              style={{ marginTop: "21rem" }}
              onClick={validateAll}
            >
              Secondary
            </button>
            <div className="registe-login">
              <p>
                Already have an Account?
                <span style={{ color: "#f7efe6", fontSize: "20px" }} onClick={Loginpage}> Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerpage;
