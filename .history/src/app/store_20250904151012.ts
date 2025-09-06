import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlise"


export const store = configureStore({
  reducer : userReducer ,
})