import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ""
};

const friendSlice = createSlice({
  name: "friendName",
  initialState,
  reducers: {
    setChatFriendName(state, action) {
      state.value = action.payload
    },
  },
})

export const { setChatFriendName } = friendSlice.actions;
export default friendSlice.reducer;
