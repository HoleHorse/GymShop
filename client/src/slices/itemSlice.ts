import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Item } from "../models/models";

interface ItemState {
  item: Item;
}

const initialState: ItemState = {
  item: new Item(-1, "", "", 0, 0, [], []),
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<Item>) => {
      state.item = action.payload;
    },
  },
});

export const { setItem } = itemSlice.actions;

export default itemSlice.reducer;
