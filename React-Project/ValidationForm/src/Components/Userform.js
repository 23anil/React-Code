import React, { useState } from "react";

function Userform({getuserdata}) {
  const [firstNameErr, setfirstNameErr] = useState("");
  const [lastNameErr, setlastNameErr] = useState("");
  const [ageErr, setageErr] = useState("");

  const [userdata, setuserdata] = useState({
    Firstname: "",
    Lastname: "",
    age: "",
  });

  let upadteuserdata = (event) => {
    setuserdata({
      ...userdata,
      [event.target.name]: event.target.value,
    });
  };

  let validateFirstname = () => {
    if (userdata.Firstname) {
      let check = /^[a-zA-Z]{2,30}$/;
      if (check.test(userdata.Firstname)) {
        setfirstNameErr("");
        return true;
      } else {
        setfirstNameErr("First Name is allowed only characters");
      }
    } else {
      setfirstNameErr("First Name is Required");
    }
  };

  let validateLastname = () => {
    if (userdata.Lastname) {
      let check = /^[a-zA-Z]{2,30}$/;
      if (check.test(userdata.Lastname)) {
        setlastNameErr("");
        return true;
      } else {
        setlastNameErr("Last name is allowed only characters");
      }
    } else {
      setlastNameErr("Last name is Required");
    }
  };

  let validateage = () => {
    if (userdata.age) {
      if (userdata.age > 0 && userdata.age < 150) {
        setageErr("");
        return true;
      } else {
        setageErr("Enter Valid Age, should be between 0-150");
      }
    } else {
      setageErr("Age is Required");
    }
  };

  let savedata = () => {
    validateFirstname();
    validateLastname();
    validateage();

    if (validateFirstname() && validateLastname() && validateage()) {
      getuserdata(userdata);
      setuserdata({
        Firstname: "",
        Lastname: "",
        age: "",
      });
    }
  };

  return (
    <div>
      <h1>User Form !!!</h1>
      <div className="ipFielddiv">
        <input
          type="text"
          placeholder="Enter First Name"
          className="inField"
          name="Firstname"
          value={userdata.Firstname}
          onChange={(event) => {
            upadteuserdata(event);
          }}
        />
        {firstNameErr && <p className="errorsms">{firstNameErr}</p>}
      </div>

      <br />

      <div className="ipFielddiv">
        <input
          type="text"
          placeholder="Enter Last Name"
          className="inField"
          name="Lastname"
          value={userdata.Lastname}
          onChange={(event) => {
            upadteuserdata(event);
          }}
        />
        {lastNameErr && <p className="errorsms">{lastNameErr}</p>}
      </div>

      <br />

      <div className="ipFielddiv">
        <input
          type="number"
          placeholder="Enter Age"
          className="inField"
          name="age"
          value={userdata.age}
          onChange={(event) => {
            upadteuserdata(event);
          }}
        />
        {ageErr && <p className="errorsms">{ageErr}</p>}
      </div>
      <br />
      <button className="btn btn-primary" onClick={savedata}>
        Save
      </button>
    </div>
  );
}

export default Userform;
