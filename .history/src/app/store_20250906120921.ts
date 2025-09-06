import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlise"


export const store = configureStore({
  reducer : userReducer ,
})

export type AppDispatch = typeof store.dispatch;
export tyoe RootState = ReturnType<typeof store.getState>