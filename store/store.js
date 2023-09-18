import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./bookingSlice";

export const store = configureStore({
  reducer: {
    bookings: bookingSlice,
  },
});
