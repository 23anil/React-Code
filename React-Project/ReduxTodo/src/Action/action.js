export let addTodo=(data)=>{
    console.log("data",data);
    return{
        type:"Add_Todo",
        payload:data
    }
}

export let deleteTodo=(idx)=>{
    return{
        type:"tododelete",
        payload:idx
    }
}

export let alldelete=()=>{
    return{
        type:"deleteAll",
    }
}





