import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./Reducers/ModalReducer";
import userReducer from "./Reducers/UserReducer";
import userAdminReducer from "./Reducers/UserAdminReducer";
import roomReducer from "./Reducers/RoomReducer";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    modalReducer: modalReducer,
    userAdminReducer: userAdminReducer,
    roomReducer: roomReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {pots: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
