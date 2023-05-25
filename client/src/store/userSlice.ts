import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Item } from "../models/item";

interface ItemsState {
  items: Item[];
}

const initialState: ItemsState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
