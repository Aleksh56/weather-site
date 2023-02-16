import React from "react"

const LocationWeather: React.FC = () => {
  return (
    <div className="text-white flex items-start flex-col">
      <p className="text-3xl mb-1 font-bold">Weather in Paris</p>
      <p className="text-4xl font-bold mb-5">26 C</p>
      <p>Cloudy</p>
      <p>Humidity: 45%</p>
      <p>Wind Speed: 3.4 km/hr</p>
    </div>
  )
}

export default LocationWeather
