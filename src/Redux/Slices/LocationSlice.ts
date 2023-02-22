import { createSlice } from "@reduxjs/toolkit"
import { IlocationState } from "../../interfaces"

const initialState: IlocationState = {
  location: "",
  locationHistory: [] as string[],
}

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload
    },
    saveLocation(state, action) {
      state.locationHistory.push(action.payload)
    },
  },
})

export const { setLocation, saveLocation } = locationSlice.actions
export default locationSlice.reducer
