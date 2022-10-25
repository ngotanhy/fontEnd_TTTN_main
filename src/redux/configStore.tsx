import { configureStore } from "@reduxjs/toolkit";
import OpenModalReducer from "./openModalReducer/OpenModalReducer";
import RoomReducer from "./roomReducer/RoomReducer";


export const store = configureStore({
  reducer: {
    OpenModalReducer:OpenModalReducer,
    RoomReducer:RoomReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
