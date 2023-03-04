import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducers/Reducer";


//importing all the reducers that we have and exporting them along with a custom name
//Note: we will use this custom name to access these reducers
export default configureStore({
    reducer: {
        checked: Reducer 
    }
})