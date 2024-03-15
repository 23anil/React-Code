import React from "react";

function Grid() {
  return (
    <div className="h-auto w-full bg-green-100 absolute grid grid-cols-4 gap-4">
      <div className="bg-lime-300 grid grid-cols-subgrid gap-4 row-span-2 col-span-2">1</div>
      <div className="h-52 w-52 border-2 border-gray-900">2</div>
      <div className="h-52 w-52 bg-gray-300">3</div>
      <div className="h-52 w-52 border-2 border-red-400">4</div>
      <div className="h-52 w-52 bg-red-200">5</div>
      <div className="h-52 w-52 border-2 border-orange-900">6</div>
      <div className="h-52 w-52 bg-orange-200">7</div>
      <div className="h-52 w-52 border-2 border-yellow-400">8</div>
      <div className="h-52 w-52 bg-green-300">9</div>
      <div className="h-52 w-52 border-2 border-lime-300">10</div>
      <div className="h-52 w-52 bg-yellow-200">11</div>
      
    
     
      

    </div>
  );
}

export default Grid;
