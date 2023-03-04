import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Searchbar.css'

const Searchbar = () => {
  const [error, setError] = useState("")
  const [city, setCity] = useState("")

  const navigate = useNavigate()

  //simple function to check whether input is empty or not and navigate it to next component
  const handleSearch = () => {
    if (city !== '') {
      let data = city
      data = data.toLowerCase()
      data = data.trim()
      data = data.replace(' ', '+')
      navigate(`/weather/${data}`)
    }
    else {
      setError('Error: Please enter a city name.')
    }
  }

  return (
    <div className='searchbar'>
      <div id='heading'>
        <h1> Weather Api </h1>
      </div>
      <div>
        <input type="search" name="search" id="search" placeholder='Location' value={city} onChange={e => setCity(e.target.value)} />
      </div>
      <div>
        <button type="submit" id='searchBtn' onClick={handleSearch}>Search</button> <br />
      </div>
      <div id='error'>
        {error}
      </div>
    </div>
  )
}

export default Searchbar