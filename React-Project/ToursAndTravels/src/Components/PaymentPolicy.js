import React from "react";
import { Modal } from "react-bootstrap";

function PaymentPolicy(props) {
  return (
    <div>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className=" ">
          <div className="card" style={{ width: "100%",height:"100%" }}>
            <div className="card-header d-flex justify-content-between border-bottom border-light-subtle">
              <p className="m-0 fw-semibold">Payment Policy</p>
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
                  onClick={props.onHide}
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </div>
            </div>
            <div className="card-body d-flex flex-column align-items-center ">
              <div className="text-justify">
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Alias nobis eius sapiente temporibus quos minus nemo beatae
                  non! Sunt dolor omnis harum totam nostrum laudantium quae unde
                  illo veritatis quidem Alias nobis eius sapiente temporibus
                  quos minus nemo beatae non! Sunt dolor omnis harum totam Sunt
                  dolor omnis harum totam nostrum laudantium quae unde illo
                  veritatis quidem Alias nobis eius sapiente temporibus quos
                  minus nemo beatae non Sunt dolor omnis harum totam nostrum
                  laudantium quae unde illo veritatis quidem Alias nobis eius
                  sapiente temporibus quos minus nemo beatae non nostrum
                  minus nemo beatae non Sunt dolor omnis harum totam nostrum
                  laudantium Alias laudantium Alias !!!
                </p>
              </div>
              <button className="policy-ok-btn mt-2" onClick={props.onHide}>
                OK
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PaymentPolicy;
