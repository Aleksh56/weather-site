export interface IDataHistoryLocation {
  config: object
  data: object
  headers: object
  request: object
  status: number
  statusText: string
}

export interface IDataLocation {
  location: string
  weather: string | number
  wind: string | number
}

export interface UserAction {
  type: string
  payload?: string
}

export interface IlocationState {
  location: string
  locationHistory: string[]
}
