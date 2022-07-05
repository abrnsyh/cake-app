import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from '../components/Cakes/CakesSlice'

const store = configureStore({
  reducer: {
    tes: 'tes',
    cake: cakeReducer
  }
});

export default store;