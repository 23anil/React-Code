import { configureStore } from "@reduxjs/toolkit";
import {counterreducer} from './createSlice' 

 export let store=configureStore({reducer:{counter:counterreducer}})