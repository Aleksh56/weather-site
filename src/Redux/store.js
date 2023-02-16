import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./Slices/LocationSlice"

const store = configureStore({
  reducer: {
    location: locationReducer
  }, 
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     serializableCheck: false,
    // }),
})

export default store;