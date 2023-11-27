import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    name: "",
    type: "",
    url: ""
  },
}

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    getInfo: (state, action) => {
      return {
        value: {
          name: action.payload,
        }
      }
    },
  },
})

export const { getInfo } = infoSlice.actions

export default infoSlice.reducer