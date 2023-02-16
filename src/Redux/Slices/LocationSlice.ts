import { createSlice } from "@reduxjs/toolkit"

const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: "",
    locationHistory: <Array<object>>[
      {
        id: new Date().toISOString(),
        city: "Paris",
      },
    ],
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload
    },
    saveLocation(state, action) {
      console.log(state.locationHistory)
      let tempObject = {
        id: new Date().toISOString(),
        city: action.payload.city,
      }
      state.locationHistory.push(tempObject)
    },
  },
})

export const { setLocation, saveLocation } = locationSlice.actions
export default locationSlice.reducer
