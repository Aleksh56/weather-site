interface IDataLocation {
  location: string
  weather: string | number
  wind: string | number
}

interface UserAction {
  type: string
  payload?: any
}

const initialState: IDataLocation = {
  location: "",
  weather: "",
  wind: "",
}

export const locationDataReducer = (
  state = initialState,
  action: UserAction
): IDataLocation => {
  switch (action.type) {
    case "SAVE_DATA_LOCATION":
      return state
    case "SET_DATA_LOCATION":
      return {
        location: action.payload.location,
        weather: action.payload.weather,
        wind: action.payload.wind,
      }
    default:
      return state
  }
}
