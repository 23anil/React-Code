import React, { useContext } from 'react'
import context from '../context/context';
function CompC(props) {

  let data=useContext(context)
  
  return (
    <div>
        <h1>comp C</h1>
        <h1>data AdminName : {data.AdminName}</h1>
          <h1>data password : {data.password}</h1>
        {
          // access data using consumer
          // <Userconsumer>
          //   {(userdata)=>{
          //     return(
          //       <h1 style={{color:"blue"}}>uname by using context api : {userdata}</h1>
          //     )
          //   }}
          // </Userconsumer>
        }
        <h2 style={{color:"red"}}>Uname by using props Drilling :{props.data}</h2>
    </div>
  )
}

export default CompC