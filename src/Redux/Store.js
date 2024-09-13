
import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './Slice/CardSlice'

export const store = configureStore({
  reducer: {
    cart : CartSlice.reducer,
  },
})