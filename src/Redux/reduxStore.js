import profileReducer from "./ProfileReducer.ts";
import authReducer from "./AuthReducer.ts";
import usersReducer2 from "./UsersFuncReducer.ts";
import postsSlice from "./postsSlice.ts";
import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  usersPage2: usersReducer2,
  posts: postsSlice,
});

let store = configureStore(
  { reducer: reducers },
  applyMiddleware(thunkMiddleware)
);

export default store;
