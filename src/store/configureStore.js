import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./sllices/chatSlice";
import friendReducer from "./sllices/friendSlice";
import thunk from "redux-thunk";

const reducer = {
  chat: chatReducer,
  friend: friendReducer,
};

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
