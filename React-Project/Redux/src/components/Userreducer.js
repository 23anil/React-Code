import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
const userSlice=createSlice({
    name:"users",
    initialState:userList,
    reducers:{
        adduser:(state,action)=>{
            state.push(action.payload)
        },
        deleteuser:(state,action)=>{
           const{id}=action.payload;
           const uu=state.find(user=>user.id==id);
           if(uu){
            return state.filter(f=>f.id!==id);
           }
        }
    }
})

export const{adduser,deleteuser}=userSlice.actions
export default userSlice.reducer