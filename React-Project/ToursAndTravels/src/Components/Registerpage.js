import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

function Registerpage() {
  let Navigate = useNavigate();

  let gotolocation = () => {
    Navigate("/locations");
  };
  let gotologin = () => {
    Navigate("/loginpage");
  };

  const [nameerror, setnameerror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [mobileerror, setmobileerror] = useState("");
  const [addresError, setaddresError] = useState("");
  const [passworderror, setpassworderror] = useState("");

  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    mobile: "",
    addres: "",
    password: "",
  });

  let updated = (event) => {
    setuserdata({
      ...userdata,
      [event.target.name]: event.target.value,
    });
  };

  let validatename = () => {
    if (userdata.name) {
      let rizex = /([a-zA-Z]{3,30}\s*)+/;
      if (rizex.test(userdata.name)) {
        setnameerror("");
      } else {
        setnameerror("invalid candidate Name ");
      }
    } else {
      setnameerror("candidate Name required");
    }
  };

  let validateEmail = () => {
    if (userdata.email) {
      let rizex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (rizex.test(userdata.email)) {
        setemailerror("");
      } else {
        setemailerror("invalid candidate Email ");
      }
    } else {
      setemailerror("candidate Email required");
    }
  };

  let validatemobile = () => {
    if (userdata.mobile) {
      let rizex = /^([+]\d{2})?\d{10}$/;
      if (rizex.test(userdata.mobile)) {
        setmobileerror("");
      } else {
        setmobileerror("invalid candidate mobile number");
      }
    } else {
      setmobileerror("candidate mobile number required");
    }
  };

  let validateaddres = () => {
    if (userdata.addres) {
      let rizex = /^[#.0-9a-zA-Z\s,-]+$/;
      if (rizex.test(userdata.addres)) {
        setaddresError("");
      } else {
        setaddresError("invalid candidate Address");
      }
    } else {
      setaddresError("candidate Address required");
    }
  };

  let validatePassword = () => {
    if (userdata.password) {
      let rizex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      if (rizex.test(userdata.password)) {
        setpassworderror("");
      } else {
        setpassworderror("invalid candidate Password");
      }
    } else {
      setpassworderror("candidate Address Password");
    }
  };

  let validateAll = () => {
    validatename();
    validateEmail();
    validatemobile();
    validateaddres();
    validatePassword();
    if (
      validatename() &&
      validateEmail() &&
      validatemobile() &&
      validateaddres() &&
      validatePassword()
    ) {
      gotolocation();
    }
  };

  return (
    <div>
      <div className="first-layer">
        <div className="second-layer">
          <div className="third-layer">
            <div className="register-page">
              <p className="register-heading">Register</p>
              <div className="field-div mt-0">
                <input
                  placeholder="Name"
                  name="name"
                  className="allfield field-placeholder"
                  type="text"
                  value={userdata.name}
                  onChange={(event) => {
                    updated(event);
                  }}
                />
                {nameerror && <p className="errormessage">*{nameerror}</p>}
              </div>

              <div className="field-div">
                <input
                  placeholder="E-mail"
                  name="email"
                  className="allfield field-placeholder"
                  type="text"
                  value={userdata.email}
                  onChange={(event) => {
                    updated(event);
                  }}
                />
                {emailerror && <p className="errormessage">*{emailerror}</p>}
              </div>
              <div className="field-div">
                <input
                  placeholder="Mobile"
                  name="mobile"
                  className="allfield field-placeholder"
                  type="tel"
                  value={userdata.mobile}
                  onChange={(event) => {
                    updated(event);
                  }}
                />
                {mobileerror && <p className="errormessage">*{mobileerror}</p>}
              </div>
              <div className="field-div">
                <input
                  placeholder="Addres"
                  name="addres"
                  className="allfield field-placeholder"
                  type="text"
                  value={userdata.addres}
                  onChange={(event) => {
                    updated(event);
                  }}
                />
                {addresError && <p className="errormessage">*{addresError}</p>}
              </div>
              <div className="field-div">
                <input
                  placeholder="password"
                  name="password"
                  className="allfield field-placeholder"
                  type="text"
                  value={userdata.password}
                  onChange={(event) => {
                    updated(event);
                  }}
                />
                {passworderror && (
                  <p className="errormessage">*{passworderror}</p>
                )}
              </div>
              <div className="button-div">
                <button className="register-btn" onClick={validateAll}>
                  Register
                </button>
              </div>
              <p className="register-page-text">
                Already have an Account?{" "}
                <strong className="register-login" onClick={gotologin}>Login</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerpage;
