import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./Slices/LocationSlice"

const store = configureStore({
  reducer: {
    location: locationReducer
  }
})

export default store;