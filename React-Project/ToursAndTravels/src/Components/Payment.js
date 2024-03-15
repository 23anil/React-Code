import React from "react";
import { Modal } from "react-bootstrap";

function Payment(props) {


  let changes=()=>{
    props.setPayStatusShow(true);
    props.HidePaymentShow();
  }

  return (
    <Modal
      show={props.paymentShow}
      aria-labelledby="contained-modal-title-vcenter"
      animation={false}
      centered
    >
      <div className="card w-100 text-center ">
        <div className="card-header d-flex justify-content-between">
          <p className="m-0 fw-semibold">Payment </p>
          <div
            className="d-flex justify-content-center align-items-center "
            style={{ height: "20px", width: "20px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-circle policy-close-icon"
              viewBox="0 0 16 16"
              onClick={props.HidePaymentShow}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="container-fluid">
            <div className="row border-bottom border-light-subtle">
              <p
                className=" fw-semibold m-0 mt-3 ms-3 p-0"
                style={{ color: "#0B8587", width: "22%", fontSize: "12px" }}
              >
                UPI Payments
              </p>

              <div
                className="border border-1 m-auto mt-2 rounded-1 d-flex align-items-center hover-g-pay"
                style={{ width: "90%", height: "35px" }}
              >
                <div className="mb-1" style={{ height: "23px", width: "23px" }}>
                  <img
                    src="https://w7.pngwing.com/pngs/667/120/png-transparent-google-pay-2020-hd-logo-thumbnail.png"
                    alt="G-pay"
                    height={"100%"}
                    width={"100%"}
                  />
                </div>
                <div
                  className="d-flex fw-bold mt-1 justify-content-center align-items-center "
                  style={{ height: "23px", width: "50px", fontSize: "10px" }}
                >
                  G Pay
                </div>
                <div
                  className="rounded-circle bg-secondary-subtle float-end position-absolute end-0 me-5 hover-bg"
                  style={{ height: "20px", width: "20px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    class="bi bi-check2 text-white mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </div>
              </div>

              <div
                className="border border-1 m-auto mt-2 mb-2 rounded-1 d-flex align-items-center hover-g-pay"
                style={{ width: "90%", height: "35px" }}
              >
                <div className="mb-1" style={{ height: "23px", width: "23px" }}>
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png"
                    alt="G-pay"
                    height={"100%"}
                    width={"100%"}
                  />
                </div>
                <div
                  className="d-flex fw-bold mt-1 ms-2 justify-content-center align-items-center "
                  style={{ height: "23px", width: "50px", fontSize: "10px" }}
                >
                  Phonepe
                </div>
                <div
                  className=" rounded-circle bg-secondary-subtle float-end position-absolute end-0 me-5"
                  style={{ height: "20px", width: "20px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    class="bi bi-check2 text-white mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <p
                className=" fw-semibold m-0 mt-3 ms-3 p-0"
                style={{ color: "#0B8587", width: "22%", fontSize: "12px" }}
              >
                Add Other UPI
              </p>

              <div
                className="border border-1 m-auto mt-2 rounded-1 Add-Upi-border d-flex align-items-center d-flex align-items-center justify-content-center"
                style={{ width: "90%", height: "35px" }}
              >
                <p
                  className=" fw-bold m-0 p-0"
                  style={{ color: "#0B8587", width: "22%", fontSize: "10px" }}
                >
                  + New UPI
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer" style={{ height: "50px" }}>
          <button className="policy-ok-btn" onClick={changes}>
            OK
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Payment;
