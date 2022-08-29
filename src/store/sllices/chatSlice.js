import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  ["tom",
    "avatar1",
    [
      {
        message: "점심 드셨나요?",
        date: "2022-08-25",
        time: 18,
      },
      {
        message: "안녕하세요 오늘 날씨가 너무너무너무너무너무너무너무너무너무너무너무 좋네요...",
        date: "2022-08-27",
        time: 17,
      }
    ],
  ],
  ["emily",
    "avatar2",
    [
      {
        message: "반가워요",
        date: "2022-08-26",
        time: 12,
      },
    ],
  ]
];

const chatSlice = createSlice({
  name: "friendList",
  initialState,
  reducers: {
    addChat(state) {
      // state.value = "Chats"
    },
  },
})

export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
