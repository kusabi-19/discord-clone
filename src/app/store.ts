import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlise"
import channeReducer from "../features/channelSlise"

export const store = configureStore({
  reducer : {
    user: userReducer,
    channel: channeReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;