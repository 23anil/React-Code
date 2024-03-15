export let getdata = (data) => {
  return {
    type: "success",
    payload: data,
  };
};

export let geterror = (error) => {
  return {
    type: "success",
    payload: error,
  };
};

export let gameplay = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch(getdata(data)))
      .catch((err) => dispatch(geterror(err)));
  };
};

// export let fetchData=()=>{
//     return(dispatch)=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response)=>response.json())
//         .then((data)=>dispatch(getdata(data)))
//         .catch((error)=>dispatch(geterror(error)));
//     }
//     }
