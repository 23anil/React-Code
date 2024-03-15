import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  Col, Container, Row } from "react-bootstrap";


function Arrows(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{  display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

function SlickTest() {
  const [data] = useState([
    {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww",
    },
    {
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },

    {
      url: "https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    nextArrow: <Arrows />,
    prevArrow: <Arrows />
  };
  return (
    <Container>
      <Row>
        <Col variant="bg-primary-subtle" className="bg-primary-subtle">
          <div className="slider-container">
            <Slider {...settings}>
              {data.map((val) => {
                return (
                  <div>
                    <img
                      src={val.url}
                      alt="..."
                      height={"400px"}
                      width={"90%"}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SlickTest;
