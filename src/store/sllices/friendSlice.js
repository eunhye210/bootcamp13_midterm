import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const friendSlice = createSlice({
  name: "friendName",
  initialState,
  reducers: {
    setFriendName(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFriendName } = friendSlice.actions;
export default friendSlice.reducer;
