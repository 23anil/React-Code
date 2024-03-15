// const { createContext } = require("react");

import { createContext } from "react";

let context =createContext();
let UserProvider =context.Provider;
let Userconsumer =context.Consumer;

export default context;
export{UserProvider,Userconsumer}