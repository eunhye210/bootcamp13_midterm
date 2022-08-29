import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "tom": {
    img: "something",
    messages: [
      // {
      // username: "tom",
      // date: "2022-8-25",
      // time: "19:00",
      // message: "안녕하세요"
      // },
      // {
      //   username: "tom",
      //   date: "2022-8-25",
      //   time: "19:10",
      //   message: "안녕하세요 오늘 날씨가 너무너무너무너무너무너무너무너무너무너무너무 좋네요..."
      // }
    ],
  },
  "emily": {
    img: "something..",
    messages: [
      {
        username: "emily",
        date: "2022-8-27",
        time: "15:00",
        message: "hello"
      }
    ],
  }
};

const chatSlice = createSlice({
  name: "chatList",
  initialState,
  reducers: {
    addChat(state, action) {
      console.log("action");
      // const messages = state[action.payload.name].messages;
      // messages: action.payload.value;
    },
  },
})

export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
