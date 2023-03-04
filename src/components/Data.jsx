import React, { useState } from 'react'
import axios from 'axios'
import '../styles/Data.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Data = () => {

  //using useParams to read the city name from the url
  const { cityName } = useParams()

  const [weatherData, setWeatherData] = useState({})
  const [errorData, setErrorData] = useState('')

  //getting states from the store
  const isChecked = useSelector((state) => state.checked)

  useEffect(() => {
    showSearchResult()
  }, [])

  //using this async function to fetch data from api
  const showSearchResult = async () => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=09afaa8779394daba8f64251230403&q=${cityName}`);
      setWeatherData(response.data);
    } catch (error) {
      setErrorData('No matching location found.')
      console.log("Error: ==> " + error);
    }
  }

  //writing this condition just to avoid errors in case of undefined values
  if (!weatherData.location || !weatherData.current) {
    return <div>Loading...</div>;
  }


  return (
    <div className='data'>
      {errorData !== '' ? (errorData) : (
        <>
          <div className='dataContainer'>
            <div>Location: <span> {weatherData.location.name} </span> </div>
            <div>Country: <span> {weatherData.location.country} </span> </div>
            <div>Timezone: <span> {weatherData.location.tz_id} </span> </div>
          </div>
          <div className='dataContainer' style={{justifyContent:'unset'}}>
            <img src={weatherData.current.condition.icon} alt="img" />
            <div>Condition: <span> {weatherData.current.condition.text} </span> </div>
          </div>
          <div className='dataContainer'>
            <div>Temperature: <span> { !isChecked ? weatherData.current.temp_c + '°C' : weatherData.current.temp_f + '°F' } </span> </div>
            <div>Feels Like: <span> { !isChecked ? weatherData.current.feelslike_c + '°C' : weatherData.current.feelslike_f + '°F' } </span> </div>
            <div>Humidity: <span> {weatherData.current.humidity + '%'} </span> </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Data