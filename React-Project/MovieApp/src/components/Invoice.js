import React from "react";

function Invoice() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="payment-status-page d-flex justify-content-center align-items-center">
            <div
              class="card"
              style={{
                width: "19rem",
                backgroundColor: "#272525",
                color: "#FFFFFF",
                borderRadius: "12px",
              }}
            >
              <div
                class="card-header d-flex justify-content-between"
                style={{ borderBottom: "1px solid #caced2ab" }}
              >
                <p className="fs-6 w-25 mb-0">Invoice</p>
                <div className="w-25 d-flex justify-content-end mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </div>
              </div>
              <div class="card-body">
                <p style={{ fontSize: "11px" }}>
                  <span style={{ color: "#949393" }}> Movie Name : </span> Fast
                  & Furious
                </p>
                <p style={{ fontSize: "11px" }}>
                  <span style={{ color: "#949393" }}> Theater Name : </span>
                  Sujatha
                </p>
                <p style={{ fontSize: "11px" }}>
                  <span style={{ color: "#949393" }}> No. of Seats : </span>02
                </p>
                <div
                  className="d-flex align-items-center"
                  style={{
                    height: "30px",
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    margin: "auto",
                  }}
                >
                  <p
                    className="ms-2 mb-0 fw-semibold"
                    style={{ fontSize: "11px", color: "#272525" }}
                  >
                    Apply Promo Code
                  </p>
                </div>
                <div
                  className="d-flex align-items-center border-bottom"
                  style={{
                    height: "35px",
                    width: "100%",
                    backgroundColor: "#383737",
                    borderBottom: "0.1% solid #585757 ",
                    margin: "auto",
                  }}
                >
                  <p
                    className="mb-0 ms-2"
                    style={{ height: "18px", width: "23px", fontSize: "12px" }}
                  >
                    10%
                  </p>
                  <p
                    className="mb-0 ms-1"
                    style={{ height: "20px", width: "157px", fontSize: "8px" }}
                  >
                    Applicable only if total amount is above 1,000 Rs
                  </p>
                  <button
                    class="btn text-white  "
                    style={{
                      border: "0.5px solid #FFFFFF66 ",
                      boxShadow: "0px 3px 6px #0A0000",
                      fontSize: "10px",
                      padding: "4px 10px 4px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    Apply
                  </button>
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{
                    height: "35px",
                    width: "100%",
                    backgroundColor: "#383737",
                    borderBottom: "0.1% solid #585757 ",
                    margin: "auto",
                  }}
                >
                  <p
                    className="mb-0 ms-2"
                    style={{ height: "18px", width: "23px", fontSize: "12px" }}
                  >
                    15%
                  </p>
                  <p
                    className="mb-0 ms-1"
                    style={{ height: "20px", width: "157px", fontSize: "8px" }}
                  >
                    Applicable only if total amount is above 1,000 Rs
                  </p>
                  <button
                    class="btn text-white  "
                    style={{
                      border: "0.5px solid #FFFFFF66 ",
                      boxShadow: "0px 3px 6px #0A0000",
                      fontSize: "10px",
                      padding: "4px 10px 4px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    Apply
                  </button>
                </div>
                <div
                  className="mt-5 d-flex align-items-center justify-content-between"
                  style={{
                    height: "30px",
                    width: "100%",
                    margin: "auto",
                  }}
                >
                  <p className="mb-0" style={{fontSize:"16px",color: "#a9a7a7"}}>Total Payable</p>
                  <p className="mb-0 fw-semibold" style={{fontSize:"18px",}}>₹ 1,500 /-</p>
                </div>
              </div>

              <div
                class="card-footer text-center"
                style={{ borderTop: "1px solid #caced2ab" }}
              >
                <button
                  class="btn mt-1 mb-1"
                  style={{
                    border: "1px solid #caced2ab",
                    boxShadow: "0px 3px 6px #0A0000",
                    padding:"5px 10px 5px 10px",
                    color:"#c4c2c2"
                  }}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
