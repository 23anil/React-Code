import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import PaymentPolicy from "./PaymentPolicy";

function MyBookings() {
  const [modalShow, setModalShow] = useState(false);

  const [bookingcards] = useState([1, 2, 3]);
  const [historycards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  let Navigate = useNavigate();

  let gotolocations = () => {
    Navigate("/locations");
  };
  return (
    <div className="container-fluid p-0">
      <div
        className="position-fixed z-3 top-0 bg-white d-flex align-items-center justify-content-between"
        style={{
          height: "50px",
          width: "100%",
          boxShadow: "0px 3px 6px #3F9FA129",
        }}
      >
        <div className="ms-3" style={{ height: "25px", width: "150px" }}>
          <img src="utosia-2.png" alt="Logo" height={"30px"} onClick={gotolocations} style={{cursor:"pointer"}}/>
        </div>
        <div className="me-4 " style={{ height: "25px", width: "50px" }}>
          <div className="dropdown">
            <button
              className=" mb-2 border-0 bg-white"
              type="button"
              data-bs-toggle="dropdown"
              title="Profile"
              style={{ height: "25px", width: "50px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-person-fill nav-profile-icon"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/myBookings">
                  My Bookings
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="..">
                  Profile
                </a>
              </li>
              <li>
                <Link className="dropdown-item" to="/loginpage">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ------------- My Bookings---------- */}
      <div
        className="row border-bottom h-50 mt-5"
        style={{ width: "94%", marginLeft: "3%" }}
      >
        <p className="fs-4 fw-semibold m-0 mt-2 mb-4">My Bookings</p>
        <div
          className="d-flex justify-content-evenly flex-wrap"
          style={{ width: "73%", marginLeft: "13.5%" }}
        >
          {bookingcards.map((val) => {
            return (
              <Card
                className="col-4 mb-4 booking-card "
                key={val}
                style={{ width: "16rem", height: "12rem" }}
              >
                <Card.Body>
                  <h5 className="d-flex justify-content-md-center align-items-center">
                    standard pack
                  </h5>
                  <h1 className="d-flex justify-content-md-center align-items-center">
                    ₹ 4,500 /-
                  </h1>
                  <h6
                    className="d-flex justify-content-md-center align-items-center"
                    style={{ color: "lightgray" }}
                  >
                    05 Dec 2022
                  </h6>
                  <button
                    className="booking-card-btn"
                    onClick={() => setModalShow(true)}
                  >
                    Cancel
                  </button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
      {/* -------------History---------- */}
      <div className="row mt-5" style={{ width: "94%", marginLeft: "3%" }}>
        <p className="fs-4 fw-semibold m-0 mt-1 mb-4 ">History</p>
        <div
          className="d-flex justify-content-evenly flex-wrap"
          style={{ width: "73%", marginLeft: "13.5%" }}
        >
          {historycards.map((val) => {
            return (
              <Card
                className="col-4 mb-4 booking-card "
                key={val}
                style={{ width: "16rem", height: "12rem" }}
              >
                <Card.Body>
                  <h5 className="d-flex justify-content-md-center align-items-center">
                    standard pack
                  </h5>
                  <h1 className="d-flex justify-content-md-center align-items-center">
                    ₹ 4,500 /-
                  </h1>
                  <h6
                    className="d-flex justify-content-md-center align-items-center"
                    style={{ color: "lightgray" }}
                  >
                    05 Dec 2022
                  </h6>
                  <button className="history-card-btn">Cancel</button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
      <PaymentPolicy show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default MyBookings;
