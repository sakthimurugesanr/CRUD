import {configureStore} from "@reduxjs/toolkit";
import customerReducer from './Slice/CustomerSlice'


export const store = configureStore(
    {   devTools : true,
        reducer:{
            customer:customerReducer
        }
    }

)