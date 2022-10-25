import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { history } from "../../Index";
import {
  ACCESS_TOKEN,
  getStoreJSON,
  http,
  setStore,
  setStoreJSON,
  TOKEN_CYBERSOFT,
  USER_LOGIN,
} from "../../Utils/Setting";
import { AppDispatch } from "../ConfigStore";

export interface roomList {
    id: number,
    tenPhong: string,
    khach: number,
    phongNgu: number,
    giuong: number,
    phongTam: number,
    moTa: string,
    giaTien: number,
    mayGiat: boolean,
    banLa: boolean,
    tivi: boolean,
    dieuHoa: boolean,
    wifi: boolean,
    bep: boolean,
    doXe: boolean,
    hoBoi: boolean,
    banUi: boolean,
    maViTri: number,
    hinhAnh: string
}

export interface roomListItem {
    roomArray: roomList[]
}

const initialState: roomListItem = {
  roomArray: [],
};

const roomReducer = createSlice({
  name: "roomReducer",
  initialState,
  reducers: {
    getAllRoom: (state: roomListItem, action: PayloadAction<roomList[]>) => {
      state.roomArray = action.payload;
    },
    createNewRoom: (state: roomListItem, action: PayloadAction<roomList>) => {

    }
  },
});

export const { getAllRoom, createNewRoom } = roomReducer.actions;

export default roomReducer.reducer;

//-------action api------------

export const getRoomApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/phong-thue");
      let roomArray: roomList[] = result.data.content;
      const action = getAllRoom(roomArray);
      console.log(result);
      dispatch(action);
      console.log(action);
    } catch (err) {
      console.log(err);
    }
  };
};

// export const getDetailRoom = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const result = await http.get("/phong-thue");
//       let roomArray: roomList[] = result.data.content;
//       const action = getAllRoom(roomArray);
//       console.log(result);
//       dispatch(action);
//       console.log(action);
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
