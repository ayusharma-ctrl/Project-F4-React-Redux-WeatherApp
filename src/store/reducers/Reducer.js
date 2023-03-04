import { createSlice } from '@reduxjs/toolkit'
//we are using createSlice method for reducer instead of using createReducer method

//this function is to get the initial state value from localStorage.. it will prevent the state on page reload
const loadStateFromLocalStorage = () => {
    const state = localStorage.getItem('state');
    if (state === null) {
        return false;
    }
    return JSON.parse(state);
}

//this is a reducer
//setChecked is an action
export const degree = createSlice({
    name: 'degreeTemp',
    initialState: loadStateFromLocalStorage(),
    reducers: {
        setChecked: (state, action) => {
            localStorage.setItem('state', JSON.stringify(!state));
            return !state
        }
    }
})

//exporting reducer and action separately
export const { setChecked } = degree.actions
export default degree.reducer