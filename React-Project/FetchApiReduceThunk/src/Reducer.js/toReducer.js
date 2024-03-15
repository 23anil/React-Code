let initial={
  data:null,
  error:null
}

let reducer =(state=initial,action)=>{
  switch(action.type){

    case "success":
      return{
        ...state,
        data:action.payload
      }

      case "Error":
      return{
        ...state,
        error:action.payload
      }

      default : return state;
  }
}

export default reducer;