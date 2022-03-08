import {combineReducers} from "redux";
import {cartReducers} from "./cartReducer";



const rootReducer = combineReducers({

cartReducers: cartReducers,


}) 
export default rootReducer;

