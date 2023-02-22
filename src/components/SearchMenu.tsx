import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { BsSearch } from "react-icons/bs"
import axios from "axios"
import LocationWeather from "./LocationWeather"
import { setLocation, saveLocation } from "../Redux/Slices/LocationSlice"
import styles from "../styles"

const SearchMenu: React.FC = () => {
  const [cityWeather, setCityWeather] = useState(false)
  const [inputLocation, setInputLocation] = useState("")
  const [locationResponse, setLocationRespose] = useState({})
  const dispatch = useDispatch()

  const FindLocation = () => {
    dispatch(saveLocation({ inputLocation }))
    if (inputLocation.replace(/\s/g, "")) {
      try {
        const WEATHER_API = `http://api.weatherapi.com/v1/current.json?key=c5807f066fb54e39a9772631231602&q=${inputLocation}`
        axios
          .get(WEATHER_API)
          .then(function (response) {
            console.log(response)
            setCityWeather(false)
            setLocationRespose(response)
            setTimeout(() => {
              setCityWeather(true)
            }, 500)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          .finally(function () {
            // always executed
          })
      } catch (error) {
        console.log("sorry")
      }
    }
  }

  const handleKeyPress = (keyEvent: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyEvent.code === "Enter") {
      FindLocation()
    }
  }

  const SetLoca = (event: string) => {
    setInputLocation(event)
    dispatch(setLocation({ inputLocation }))
  }

  return (
    <div className="bg-black/60 p-7 rounded-2xl">
      <div className="flex items-center mb-4">
        <input
          type="text"
          className={styles.menuInput}
          placeholder="Search..."
          onChange={(event) => SetLoca(event.target.value)}
          onKeyUp={(keyDown) => handleKeyPress(keyDown)}
        />
        <button onClick={FindLocation}>
          <BsSearch className="text-2xl text-white" />
        </button>
      </div>
      {cityWeather ? (
        <LocationWeather {...locationResponse} />
      ) : (
        <div className="text-white text-xl">Input your city</div>
      )}
    </div>
  )
}

export default SearchMenu
