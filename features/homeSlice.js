import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
  favoriteItems: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const temp={
        id:nanoid(),
        text:action.payload
      }
      state.favoriteItems.push(temp);
    },
    removeFavorite: (state, action) => {
      const { text } = action.payload;
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.text !== text
      );
    },
  },
});

export const { addFavorite, removeFavorite } = homeSlice.actions;

export default homeSlice.reducer;
