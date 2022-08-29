import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./sllices/toggleSlice";
import logger from "redux-logger";

const reducer = {
  toggle: toggleReducer,
}

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;
