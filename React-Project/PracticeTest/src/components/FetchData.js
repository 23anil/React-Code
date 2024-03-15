import React from 'react'
import {useState,useEffect} from 'react'

function FetchData() {

    const [data, setdata] = useState([])

    let fetch01= async()=>{
        let response= await fetch("https://jsonplaceholder.typicode.com/users")
        let getdata= await response.json();
        setdata(getdata);
    }

    useEffect(() => {
        fetch01();
    }, [])
    
   
    console.log(data);

  return (
    <div>

    </div>
  )
}

export default FetchData