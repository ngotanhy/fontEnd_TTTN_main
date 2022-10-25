import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../configStore";

const initialState = {
  arrImage: [
    {
      img: "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720",
    },
    {
      img: "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720",
    },
    {
      img: "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720",
    },
    {
      img: "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720",
    },
    {
      img: "https://a0.muscache.com/im/pictures/c2120b84-291d-4738-a911-97672d2ab3f2.jpg?im_w=720",
    },
    {
      img: "https://a0.muscache.com/im/pictures/c2120b84-291d-4738-a911-97672d2ab3f2.jpg?im_w=720",
    },
    {
      img: "https://a0.muscache.com/im/pictures/c2120b84-291d-4738-a911-97672d2ab3f2.jpg?im_w=720",
    },
  ],
};

const RoomReducer = createSlice({
  name: "RoomReducer",
  initialState,
  reducers: {
    // modal: (state, action: PayloadAction<boolean>) => {
    //   state.open =action.payload;
    // },
  },
});

export const {} = RoomReducer.actions;

export default RoomReducer.reducer;
