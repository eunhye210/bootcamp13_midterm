import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./sllices/chatSlice";
import friendReducer from "./sllices/friendSlice";
import logger from "redux-logger";

const reducer = {
  chat: chatReducer,
  friend: friendReducer,
}

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;
