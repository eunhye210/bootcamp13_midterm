import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "tom": {
    img: null,
    messages: [],
  },
  "emily": {
    img: null,
    messages: [],
  },
  "lauren": {
    img: null,
    messages: [],
  },
  "bob": {
    img: null,
    messages: [],
  },
  "james": {
    img: null,
    messages: [],
  },
};

const chatSlice = createSlice({
  name: "chatList",
  initialState,
  reducers: {
    addChat(state, action) {
      const {name, value} = action.payload;
      state[name].img = value.img;
      state[name].messages = value.messages;
    },
    setChat(state, action) {
      return action.payload;
    }
  },
})

export const { addChat, setChat } = chatSlice.actions;
export default chatSlice.reducer;
