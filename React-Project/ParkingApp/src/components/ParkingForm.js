import React, { useState } from "react";

function ParkingForm(props) {
  const [fomdata, setfomdata] = useState({
    ownername: "",
    vNo: "",
    email: "",
  });
  let updatedetails = (event) => {
    setfomdata({
      ...fomdata,
      [event.target.name]: event.target.value,
    });
  };

  let save = () => {
    // send data to parent or back end
    props.getformdata(fomdata);

    // clear the form
    setfomdata({
      ownername: "",
      vNo: "",
      email: "",
    });
  };

  return (
    <div>
      <h1>Parking Form</h1>
      <div className="border container mt-5">
        <div className="mb-3 mt-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            owner name
          </label>
          <input
            name="ownername"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="entet owner name"
            value={fomdata.ownername}
            onChange={(event) => {
              updatedetails(event);
            }}
          />
        </div>

        <div className="mb-3 mt-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Vehical No
          </label>
          <input
            name="vNo"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="entet your Vehical No"
            value={fomdata.vNo}
            onChange={(event) => {
              updatedetails(event);
            }}
          />
        </div>

        <div className="mb-3 mt-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="entet your Email address"
            value={fomdata.email}
            onChange={(event) => {
              updatedetails(event);
            }}
          />
        </div>
        <button  className="btn btn-primary mb-2" onClick={save}>Submit</button>
      </div>
    </div>
  );
}
export default ParkingForm;
