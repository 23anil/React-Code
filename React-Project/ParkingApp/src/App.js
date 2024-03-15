import './App.css';
import ParkingForm from './components/ParkingForm';
import Table from './components/Table';
import { useState } from 'react';

function App() {

const [allformdata, setallformdata] = useState([]);
console.log("allformdata",allformdata);

let getformdata=(data)=>{
  console.log("data in app ",data);
  // take a copy of the state 
  let allformdatacopy=[...allformdata];
  // push data in the copied arry 
  allformdatacopy.push(data);
  // set copied state 
  setallformdata(allformdatacopy);
  // or 
  // setallformdata((prevState)=>[...prevState,data]);
}
  return (
    <div className="App">
      <ParkingForm getformdata={getformdata} />
      <Table allformdata={allformdata}/>
    </div>
  );
}

export default App;
