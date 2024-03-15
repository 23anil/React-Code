export let increment=(data)=>{
    return{
        type:"increment",
        payload:data,
    }
}

export let decrement=(data)=>{
    return{
        type:"decrement",
        payload:data,
    }
}

export let reset=()=>{
    return{
        type:"reset",
    }
}