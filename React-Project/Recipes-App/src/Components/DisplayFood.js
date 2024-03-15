import React from "react";

function DisplayFood(props) {
  return (
    <div className="displaydiv">
      <p className="contentheader">{props.selectedDish.name}</p>
      <div className="content-image">
        <img src={props.selectedDish.image} alt="foodimage" />
      </div>
      <p className="image-footer">Steps In Making {props.selectedDish.name}</p>
      <p className="decription">{props.selectedDish.description}</p>
    </div>
  );
}

export default DisplayFood;
