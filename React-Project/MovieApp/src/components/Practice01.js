import Carousel from "nuka-carousel";
// import React, { useState } from "react";

function Practice01() {
  //   const [timeings, settimeings] = useState([
  //     { id: 1, time: "10 : 00 Am", de: "ture" },
  //     { id: 1, time: "02 : 00 Pm", de: "false" },
  //     { id: 1, time: "05 : 00 Pm", de: "ture" },
  //     { id: 1, time: "10 : 00 Pm", de: "false" },
  //   ]);
  return (
    <div>
      {/* {timeings.map((val) => {
        return (
          <button
            type="button"
            class="btn btn-primary"
            key={val.id}
            disabled={val.de}
          >
            {val.time}
          </button>
        );
      })} */}
      
      <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Practice01;
