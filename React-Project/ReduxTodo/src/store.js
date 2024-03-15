import { createStore } from "redux";
import toReducer from "./Reducer/todoReducer";


let store = createStore(
    toReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
