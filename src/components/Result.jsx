import React from 'react'
import '../styles/Result.css'
import Toggle from './Toggle'
import Data from './Data'
import { Link } from 'react-router-dom';

const Result = () => {

  return (
    <div className='result'>
      <div id='headingResult'>
        <h1> Weather Api </h1>
      </div>
      <div>
        <Toggle />
      </div>
      <div>
        <Data />
      </div>
      <div>
        <Link to='/Project-F4-React-Redux-WeatherApp'> <button type="submit" id='goBackBtn'>Go Back</button> </Link>
      </div>
    </div>
  )
}

export default Result