import React from "react"

const LocationWeather: React.FC = (location: any) => {
  return (
    <div className="text-white flex items-start flex-col">
      <p className="text-3xl mb-1 font-bold">
        Weather in {location.data.location.name}
      </p>
      <p className="text-4xl font-bold mb-5">
        {location.data.current.temp_c} C
      </p>
      <p>{location.data.current.condition.text}</p>
      <p>Humidity: {location.data.current.humidity}%</p>
      <p>Wind Speed: {location.data.current.wind_kph} km/hr</p>
    </div>
  )
}

export default LocationWeather
