const { createContext } = require("react");

let Logincontext =createContext();
let LoginProvider =Logincontext.Provider;
let Loginconsumer =Logincontext.Consumer;

export default Logincontext;
export{LoginProvider,Loginconsumer}