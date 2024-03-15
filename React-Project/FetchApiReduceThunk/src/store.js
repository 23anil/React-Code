import { applyMiddleware, createStore } from "redux";
import reducer from "./Reducer.js/toReducer";
import { thunk } from "redux-thunk";

let store=createStore(reducer,applyMiddleware(thunk));

export default store;