import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Friends"
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    moveToChatPage(state) {
      state.value = "Chats"
    },
    moveToFriendPage(state) {
      state.value = "Friends"
    },
  },
})

export const { moveToChatPage, moveToFriendPage } = toggleSlice.actions;
export default toggleSlice.reducer;
