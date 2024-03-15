import React from "react";

function PaymentStatus() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="payment-status-page d-flex justify-content-center align-items-center">
            <div className="payment-card">
              <div className="payment-status-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="38"
                  fill="currentColor"
                  class="bi bi-check2 mt-2 ms-2"
                  viewBox="0 0 16 16"
                  color="#0a0000"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
              </div>
              <p className="fs-5 p-0 mt-3 fw-semibold text-center text-light">payment successful</p>
              <button type="button" class="payment-btn">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentStatus;
