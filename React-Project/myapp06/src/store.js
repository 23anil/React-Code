import { applyMiddleware, createStore } from "redux";
import reducer from "./Reducer.js/toReducer";
import { thunk } from "redux-thunk";

export let store=createStore(reducer,applyMiddleware(thunk))