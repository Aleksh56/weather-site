import React from "react"
import { useSelector } from "react-redux"

const LocationWeather: React.FC = (location: any) => {
  const locationData = useSelector(
    (state: any) => state.location.locationHistory
  )

  const historyLog = () => {
    let cities = ""
    for (let index = 0; index < locationData.length; index++) {
      cities += locationData[index].inputLocation + " "
    }
    console.log(cities)
  }

  return (
    <div className="text-white flex items-start flex-col">
      <p className="text-3xl mb-1 font-bold">
        Weather in {location.data.location.name}
      </p>
      <div className="flex items-center justify-center mb-3">
        <img src={location.data.current.condition.icon} alt="" />
        <p className="text-4xl font-bold">{location.data.current.temp_c} C</p>
      </div>
      <p>{location.data.current.condition.text}</p>
      <p>Humidity: {location.data.current.humidity}%</p>
      <p>Wind Speed: {location.data.current.wind_kph} km/hr</p>
      <button className="bg-red border border-1 p-2" onClick={historyLog}>
        History
      </button>
    </div>
  )
}

export default LocationWeather
