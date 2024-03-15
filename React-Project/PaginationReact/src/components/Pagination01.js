import React, { useEffect, useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';

function Pagination01() {
    
const [data, setdata] = useState(null)

useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/todos")
.then((solve)=>solve.json())
.then((data)=>{setdata(data)})
},[])

console.log("data",data);

let items = [];
for (let number = 1; number <=  10; number++) {
  items.push(
    <Pagination.Item key={number} >
      {number}
    </Pagination.Item>,
  );
}
  return (
    <div>
         <Pagination style={{listStyle:"none",display:"flex"}}>
         <Pagination.Item >&#8672;</Pagination.Item>
          {items}
          <Pagination.Item >&#8674;</Pagination.Item>
          </Pagination>
    <br />

 
    </div>
  )
}

export default Pagination01
