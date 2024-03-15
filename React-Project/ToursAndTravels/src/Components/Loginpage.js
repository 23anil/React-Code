import React, { useState } from "react";
import { useNavigate } from "react-router";

function Loginpage() {
  let Navigate = useNavigate();

  let gotoregister = () => {
    Navigate("/registerpage");
  };
  let gotolocations = () => {
    Navigate("/locations");
  };

  const [emailerror, setemailerror] = useState("");
  const [passworderror, setpassworderror] = useState("");

  const [userdata, setuserdata] = useState({
    Numberormail: "",
    password: "",
  });

  let updatedata = (event) => {
    setuserdata({
      ...userdata,
      [event.target.name]: event.target.value,
    });
  };

  let validatename = () => {
    if (userdata.Numberormail) {
      let rizex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (rizex.test(userdata.Numberormail)) {
        setemailerror("");
        return true;
      } else {
        setemailerror("invalid Number or mail");
      }
    } else {
      setemailerror("candidate Number or mail required");
    }
  };

  let validatepassword = () => {
    if (userdata.password) {
      let rizex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      if (rizex.test(userdata.password)) {
        setpassworderror("");
        return true;
      } else {
        setpassworderror("invalid password");
      }
    } else {
      setpassworderror("candidate password required");
    }
  };

  let validateall = () => {
    validatename();
    validatepassword();
    if (validatename() && validatepassword()) {
      gotolocations();
    }
  };

  return (
    <div className="first-layer">
      <div className="second-layer">
        <div className="third-layer">
          <div className="loginpage">
            <p className="loginpage-heading">Login</p>
            <div className="first-field-div">
              <input
                placeholder="Number/E-mail"
                name="Numberormail"
                className="Numberormail"
                type="text"
                value={userdata.Numberormail}
                onChange={(event) => {
                  updatedata(event);
                }}
              />
              {emailerror && <p className="errormessage">*{emailerror}</p>}
            </div>
            <div className="second-field-div">
              <input
                placeholder="Password"
                name="password"
                className="password"
                type="password"
                value={userdata.password}
                onChange={(event) => {
                  updatedata(event);
                }}
              />
              {passworderror && (
                <p className="errormessage">*{passworderror}</p>
              )}
            </div>
            <div className="login-btn-div" >
              <button className="login-btn" onClick={validateall}>
                LOGIN
              </button>
            </div>
            <p className="login-page-text">
              Don't have an Account?{" "}
              <strong className="register-loginpage" onClick={gotoregister}>
                Register
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
