import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: 'cart',
  initialState: 
  {
    count: 1
  },
  reducers: {
    addCount(state, action) {
      // findIndex: 조건에 만족하는 배열방 인덱스번호 리턴
      let index = state.findIndex((data) => {
        //  조건식
        return data.id === parseInt(action.payload);
      })
      state[index].count++;
    },

    subCount(state, action) {
      let index = state.findIndex((data) => {
        return data.id === parseInt(action.payload);
      })

      if (state[index].count > 0)
        state[index].count--;

    }
  }

})

export const { addCount, subCount} = cart.actions;

export default configureStore({
  reducer : {
    cart:cart.reducer
  }
})