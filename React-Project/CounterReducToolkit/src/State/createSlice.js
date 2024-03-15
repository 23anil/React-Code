import { createSlice } from "@reduxjs/toolkit";

// interface CounterState {
//     value:number;
// }

// const initialState={
//     value:0,
// } as CounterState

let counterslice=createSlice({
    name:"counter",
    initialState:{value:0},
    reducers:{
   increment(state){
    state.value++;
   },
   decrement(state){
    state.value--;
   },
   reset(state){
    state.value=0;
   },
    }
})

export const {increment,decrement,reset} =counterslice.actions
export default counterslice.reducer;