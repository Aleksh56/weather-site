import React, { useState } from "react"
import { BsSearch } from "react-icons/bs"
import LocationWeather from "./LocationWeather"
import { useDispatch, useSelector } from "react-redux"
import { setLocation, saveLocation } from "../Redux/Slices/LocationSlice"
import styles from "../styles"

const SearchMenu: React.FC = () => {
  const [cityWeather, setCityWeather] = useState(true)
  const [inputLocation, setInputLocation] = useState("")
  const location = useSelector((state: any) => state.location.location)
  const dispatch = useDispatch()

  const FindLocation = () => {
    dispatch(saveLocation({ inputLocation }))
    if (inputLocation.replace(/\s/g, "")) {
      try {
        // console.log("ura!!")
        const WEATHER_API = "some link"
        fetch(WEATHER_API).then((response: any) => JSON.parse(response))
      } catch (error) {
        console.log(error)
      }
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
        />
        <button onClick={FindLocation}>
          <BsSearch className="text-2xl text-white" />
        </button>
      </div>
      {cityWeather ? (
        <LocationWeather />
      ) : (
        <div className="text-white text-xl">Input your city</div>
      )}
    </div>
  )
}

export default SearchMenu
