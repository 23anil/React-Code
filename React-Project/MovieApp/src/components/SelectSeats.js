import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function SelectSeats() {

  const [seacts] = useState([{rownameSeats: "R1" },{rownameSeats: "R2" },{rownameSeats: "R3" },{rownameSeats: "R4" }]);
  return (
    <div>
      {/* ----------- */}


      <Modal show={""} onHide={""}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={""}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>


      {/* ---------------------- */}
      <div className="container-fluid">
        <div className="row ">
          <div className="payment-status-page d-flex justify-content-center align-items-center">
            <div
              class="card"
              style={{
                width: "25rem",
                backgroundColor: "#272525",
                color: "#FFFFFF",
                borderRadius: "12px",
              }}
            >
              <div
                class="card-header d-flex justify-content-between"
                style={{ borderBottom: "1px solid #caced2ab" }}
              >
                <p className="fs-6 mb-0" style={{ width: "85px" }}>
                  Select Seats
                </p>
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
                {
               
                }
            
                <div className="row">
                  {seacts.map((val) => {
                    return <div className="seats-div ms-3 d-flex justify-content-center align-items-center ">{val.rownameSeats}</div>;
                  }
                  )
                 
                  }
         
                </div>
              </div>
              <div
                class="card-footer text-center"
                style={{ borderTop: "1px solid #caced2ab" }}
              >
                <button
                  class="btn"
                  style={{
                    border: "1px solid #caced2ab",
                    boxShadow: "0px 3px 6px #0A0000",
                    padding: "5px 10px 5px 10px",
                    color: "#c4c2c2",
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

export default SelectSeats;
