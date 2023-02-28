export interface IDataLocation {
  location: string
  weather: string | number
  wind: string | number
}

export interface IlocationState {
  location: string
  locationHistory: string[]
}
