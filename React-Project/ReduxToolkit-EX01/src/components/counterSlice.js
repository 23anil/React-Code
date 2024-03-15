import { createSlice } from "@reduxjs/toolkit";

let initialstate = {
  count: 0,
};

let counterslice = createSlice({
  name: "counter",
  initialstate,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
        state.count -= 1;
      },
  },
});

export const {increment,decrement}=counterslice.actions;
export default counterslice.reducer;
