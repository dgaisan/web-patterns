import {combineReducers} from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import notesReducer from "./features/notes/notesSlice";

export const rootReducer = combineReducers({
    counter: counterReducer,
    notes: notesReducer
});