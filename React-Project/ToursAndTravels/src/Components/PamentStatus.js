import React from "react";
import { Card, Modal } from "react-bootstrap";

function PamentStatus(props) {
  // onHide={props.HidePayStatusShow}
  return (
    <div className="payment d-flex justify-content-center align-items-center">
      <Modal
        show={props.PayStatusShow}
        aria-labelledby="contained-modal-title-vcenter"
        animation={false}
      
        centered
      >
        <Card style={{ width: "100%",height:"50%" }}>
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <div style={{width: "4rem", height: "4rem",backgroundColor:"rgb(6, 191, 6)" }} className="rounded-circle d-flex justify-content-center align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              fill="white"
              class="bi bi-check2 fs-5 fw-bold mt-1 me-1"
              viewBox="0 0 16 16"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
            </div>
            <p className="fs-5 m-0" style={{color:"#012223",fontFamily:"sans-serif",fontWeight:"800"}}>Payment Successfull</p>
            <button className="border rounded" style={{color:"#fff",backgroundColor:"#0B8587",borderColor:"#097374",height:"40px",width:"65px"}} onClick={props.HidePayStatusShow}>OK</button>
          </Card.Body>
        </Card>
      </Modal>
    </div>
  );
}

export default PamentStatus;
