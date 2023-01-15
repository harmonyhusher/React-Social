import profileReducer from "./ProfileReducer";
import authReducer from "./AuthReducer";
import usersReducer2 from "./UsersFuncReducer";
import postsSlice from "./postsSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

let reducers = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  usersPage2: usersReducer2,
  posts: postsSlice,
});

let store = configureStore({ reducer: reducers });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
