import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../configStore';

const initialState = {
  open: false,
};

const OpenModalReducer = createSlice({
  name: "OpenModalReducer",
  initialState,
  reducers: {
    modal: (state, action: PayloadAction<boolean>) => {
      state.open =action.payload;
    },
  },
});

export const { modal  } = OpenModalReducer.actions;

export default OpenModalReducer.reducer;
