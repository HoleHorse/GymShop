import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/user";

interface ItemsState {
  user: User;
}

const initialState: ItemsState = {
  user: new User("", "", ""),
};

export const userSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
