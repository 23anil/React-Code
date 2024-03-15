import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userslice=createSlice({
name:"users",
initialState:userList,
reducers:{}
})

export default userslice.reducer;