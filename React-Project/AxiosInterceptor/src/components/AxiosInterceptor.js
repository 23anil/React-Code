import axios from "axios";
import React, { useEffect, useState } from "react";

function AxiosInterceptor() {
  let fetch = async () => {
    try {
      let fetchdata = await axios.get(
        "https://jsonplaceholder.typcode.com/posts/1"
      );
    } catch (error) {
      console.log("error");
    }
  };

  const [data, setdata] = useState("");
  const [show, setshow] = useState(false);
  // response
  axios.interceptors.response.use(
    (resopnsedata) => {
      console.log("Response Executed", resopnsedata);
      setdata(`Api data : ${resopnsedata.data.title}`);
      // show=<h1>{resopnsedata.data.title}</h1>;
      setshow(true);
      // return resopnsedata;
    },
    (error) => {
      console.log("Response Error", error.message);
      setdata(`Api data : ${error.message}`);
      return Promise.reject(error);
    }
  );

  // request

  axios.interceptors.request.use(
    (requestdata) => {
      console.log("Request Excuted", requestdata);
      // setdata("Loading ...");
      setshow(false);
      return requestdata;
    },
    (error) => {
      console.log("Request error", error.message);
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div style={{textAlign:"center"}}>
      <h1>Axios Interceptor</h1>
    
        {show  ? (
           <h4>{data}</h4>
        ) : (
          <button class="btn btn-primary">
            <span class="spinner-border spinner-border-sm"></span>
            Loading..
          </button>
        )}
      
    </div>
  );
}

export default AxiosInterceptor;
