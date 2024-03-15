import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";


function Successfully() {
  let navigator = useNavigate();

  let gotohome = () => {
    navigator("/home");
  };
  return (
    <div className="bg-secondary success-page d-flex justify-content-md-center align-items-center">
      <Card className="text-center" style={{ width: "18rem", height: "11rem" }}>
        <Card.Body className="pt-2">
          <div className="upload-status-animation-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              color="#05CC76"
              fill="currentColor"
              class="bi bi-check2 mt-2"
              viewBox="0 0 16 16"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
          </div>
          <p className="upload-status-text">Successfully Uploaded</p>
          <Button className="upload-status-btn" onClick={gotohome} >OK</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Successfully;
