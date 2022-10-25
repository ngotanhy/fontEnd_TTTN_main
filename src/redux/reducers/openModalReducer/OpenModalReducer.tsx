import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../configStore";

const defaultComponent = () => {
  return <div>OpenModalReducer</div>;
};

const initialState = {
  openModal: false,
  openModalPopup: false,
  ComponentTitle: defaultComponent,
  ComponentContent: defaultComponent,
};

const OpenModalReducer = createSlice({
  name: "OpenModalReducer",
  initialState,
  reducers: {
    modal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
    modalPopUp: (state, action: PayloadAction<any>) => {
      let { ComponentContent, openModalPopup, ComponentTitle } = action.payload;
      state.openModalPopup = openModalPopup;
      state.ComponentContent = ComponentContent;
      state.ComponentTitle = ComponentTitle;
    },
  },
});

export const { modal, modalPopUp } = OpenModalReducer.actions;

export default OpenModalReducer.reducer;
