import React from 'react'
import '../styles/Toggle.css'
import {useSelector, useDispatch} from 'react-redux'
import { setChecked } from '../store/reducers/Reducer'

//we have to import actions from the respective reducer
//we use useDispatch to trigger any action
//we use useSelector to collect all the states from the store

const Toggle = () => {

  const isChecked = useSelector((state) => state.checked)
  const dispatch = useDispatch()

  return (
    <div className='containerToggle'>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => dispatch(setChecked())}
        />
        <span className="toggle-switch-slider"></span>
      </label>
      <div>{isChecked ? 'Fahrenheit' : 'Celcius'}</div>
    </div>
  );
}

export default Toggle