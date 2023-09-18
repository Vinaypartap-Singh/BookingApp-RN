import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "Bookings",
  initialState: {
    bookings: [],
  },
  reducers: {
    savedPlaces(state, action) {
      state.bookings.push({ ...action.payload });
    },
  },
});

export const { savedPlaces } = bookingSlice.actions;

export default bookingSlice.reducer;
