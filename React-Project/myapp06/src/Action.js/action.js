export let success = (data) => {
  return {
    type: "Resolve",
    payload: data,
  };
};

export let failure = (data) => {
    return {
      type: "Reject",
      payload: data,
    };
  };

export let fetchdata=()=>{
    return(dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((getdata)=>dispatch(success(getdata)))
        .catch((error)=>dispatch(failure(error)))  
    }
  }