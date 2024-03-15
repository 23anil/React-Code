import React, { useEffect, useState } from "react";

function StopWatch() {
  const [isrunning, setisrunning] = useState(false);
  const [time, settime] = useState(0);

  useEffect(() => {
    let intervalid;
    if (isrunning) {
      intervalid = setInterval(() => settime(time + 1), 10);
    }
    return () => clearInterval(intervalid);
  }, [isrunning, time]);

  let timestart = () => {
    setisrunning(true)
  };
  let timestop = () => {
    setisrunning(false)
  };
  let timereset = () => {
    settime(0)
    setisrunning(false)
  };

let hr=Math.floor(time/360000);
let min=Math.floor((time %360000)/6000)
let sec=Math.floor((time%6000)/100)
let milisec=time%100;

  return <div>
<h1>React stopwatch</h1>
<h2>{hr.toString().padStart(2,"0")}:{min.toString().padStart(2,"0")}:{sec.toString().padStart(2,"0")}:{milisec.toString().padStart(2,"0")}</h2>

<button onClick={timestart}>start</button>
<button onClick={timestop}>stop</button>
<button onClick={timereset}>reset</button>
  </div>;
}

export default StopWatch;
