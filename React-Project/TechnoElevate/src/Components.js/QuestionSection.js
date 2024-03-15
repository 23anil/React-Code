import React, { useState } from "react";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

function QuestionSection({ copydata }) {

  const [currentpage, setcurrentpage] = useState (1)
  const recordsPerpage=10;
  const lastIndex=currentpage*recordsPerpage;
  const firstIndex=lastIndex-recordsPerpage;
  const data=copydata.slice(firstIndex,lastIndex);
  const nquestions=Math.ceil(copydata.length/recordsPerpage);
  const numbers =[...Array(nquestions+1).keys()].slice(1);


console.log("currentpage",currentpage);
console.log("recordsPerpage",recordsPerpage);
console.log("lastIndex",lastIndex);
console.log("firstIndex",firstIndex);
console.log("data",data);
console.log("nquestions",nquestions);
console.log("numbers",numbers);
console.log("*************");

  if (copydata.length > 0) {
    return (
      <div>
        {data.map((val, idx) => {
          return (
            <div className="question-outer-div" key={idx}>
              <h5 className=" ms-5 mb-0">Question {val.id}</h5>
            <p className="qustion01-div mt-1">{val.body}</p>
            </div>
          );
        })}
        <nav className=" d-flex justify-content-md-center align-items-center mt-3">
          <ul className="pagination">
            <li className="page-item">
              <Link to=" " className="page-link" onClick={prePage}>Prev</Link>
            </li>
            {
              numbers.map((n,i)=>(
                <li className={`page-item ${currentpage=== n ? 'active':' '}`} key={i}>
                  <Link to=" " className="page-link"
                  onClick={()=>{changeCpage(n)}}>{n}</Link>
                </li>
              ))
            }
             <li className="page-item">
              <Link to=" " className="page-link" onClick={nextPage}>Next</Link>
            </li>
          </ul>
        </nav>
        </div>
    );
  }
  function prePage(){
    if(currentpage!==firstIndex){
      setcurrentpage(currentpage-1)
    }  
  }
  function changeCpage(id){
    setcurrentpage(id)
  }
  function nextPage(){
    if(currentpage!==lastIndex){
      setcurrentpage(currentpage+1)
    }
  }
}

export default QuestionSection;
