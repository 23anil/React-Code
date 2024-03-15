import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  let navigator = useNavigate();

  let moviepage = () => {
    navigator("/movies");
  };

  let Register = () => {
    navigator("/Register");
  };

  const [logindata, setlogindata] = useState({
    PhoneOREmail: "",
    password: "",
  });

  const [PhoneOREmailError, setPhoneOREmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  let update = (event) => {
    setlogindata({
      ...logindata,
      [event.target.name]: event.target.value,
    });
  };

  let validPhoneOREmail = () => {
    if (logindata.PhoneOREmail) {
      let rizex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      let rizex01 = /^([+]\d{2})?\d{10}$/;
      if (
        rizex.test(logindata.PhoneOREmail) ||
        rizex01.test(logindata.PhoneOREmail)
      ) {
        setPhoneOREmailError("");
        return true;
      } else {
        setPhoneOREmailError("invalid Phone number / E-mail");
      }
    } else {
      setPhoneOREmailError("Requird Phone number / E-mail");
    }
  };

  let validpassword = () => {
    if (logindata.password) {
      let rizex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      if (rizex.test(logindata.password)) {
        setpasswordError("");
        return true;
      } else {
        setpasswordError("invalid Password");
      }
    } else {
      setpasswordError("Requird Password");
    }
  };

  let check = () => {
    validPhoneOREmail();
    validpassword();
    if (validPhoneOREmail() && validpassword()) {
      moviepage();
    }
  };

  return (
    <div className="loginpage">
      <div className="emptydiv"></div>
      <div className="logindiv">
        <div className="loginlabel">Login</div>
        <div className="login1stfield loginfield">
          <input
            className="text-white bg-transparent"
            placeholder="Phone number / E-mail"
            type="text"
            name="PhoneOREmail"
            value={logindata.PhoneOREmail}
            onChange={(event) => {
              update(event);
            }}
          />
          {PhoneOREmailError && (
            <p style={{ color: "red" }}>{PhoneOREmailError}</p>
          )}
        </div>
        <div className="login2ndfield loginfield ">
          <input
            className="text-white bg-transparent border border-0"
            placeholder="Password"
            type="password"
            name="password"
            value={logindata.password}
            onChange={(event) => {
              update(event);
            }}
          />
          {passwordError && (<p style={{ color: "red" }}>{passwordError}</p>)}
        </div>
        <div className="loginbtndiv">
          <button type="button" className="log-btn" onClick={check}>
            Login
          </button>
        </div>
        <div className="login-last-label">
          <p style={{width:"100%"}} className="m-0">
            Don't have an Account?
            <span className="loginpage-Register" onClick={Register}>
              {" "}
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
