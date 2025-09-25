import {combineReducers} from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

export const rootReducer = combineReducers({
    counter: counterReducer
});