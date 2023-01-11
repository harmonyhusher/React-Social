import profileReducer from "./ProfileReducer";
import authReducer from "./AuthReducer";
import usersReducer2 from "./UsersFuncReducer";
import postsSlice from "./postsSlice";
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
