import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCakes: 100,
}

const cakesSlice = createSlice({
  name: 'cake',
  initialState,

  reducers: {
    decrementCake: (state) => {
      state.totalCakes--;
    },
    
    restockCake: (state) => {
      state.totalCakes += 100;
    }
  }
})

export default cakesSlice.reducer
export const {decrementCake, restockCake} = cakesSlice.actions