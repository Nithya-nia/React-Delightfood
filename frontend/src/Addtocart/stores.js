import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice'


const stores=configureStore({
    reducer:{
        cart:cartSlice
    }
})

export default stores