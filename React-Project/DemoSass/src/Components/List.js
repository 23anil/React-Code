import React from "react";
import './nested.scss'
function List() {
  return (
    <div className="lists">
      <h1>This is main content</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
        consequatur magni enim ea sint necessitatibus quibusdam possimus, minima
        exercitationem pariatur accusamus, itaque praesentium ut voluptatem
        earum iste quae assumenda rem!
      </p>
      <h2>This is sub content</h2>
      <p>
        necessitatibus quibusdam possimus, minima exercitationem pariatur
        accusamus,
      </p>
    </div>
  );
}

export default List;
