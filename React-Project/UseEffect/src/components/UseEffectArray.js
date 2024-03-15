import React, { useEffect, useState } from "react";

function UseEffectArray() {
  const [birds, setbirds] = useState([]);
  console.log("birds", birds);

  useEffect(() => {
    if (birds.length > 0) {
      console.log("one parrot got added");
    }
  }, [birds]);

  let addbirds = () => {
    let birdscopy = [...birds];
    birdscopy.push("parrot");
    setbirds(birdscopy);
    // OR
    // setbirds((preveState)=>[...preveState,"parrot"]);
  };
  return (
    <div>
      <button onClick={addbirds}>Add bird</button>
      {birds.map((val, inx) => {
        return <li key={inx}>{val}</li>;
      })}
    </div>
  );
}

export default UseEffectArray;
