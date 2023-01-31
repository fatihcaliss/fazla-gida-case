import { configureStore } from '@reduxjs/toolkit'
import  topArtistSlice  from './topArtistSlice'

export const store = configureStore({
  reducer: {
    topArtistSlice:topArtistSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
})