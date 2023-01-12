<<<<<<< HEAD
import profileReducer from "./ProfileReducer.ts";
import authReducer from "./AuthReducer.ts";
import usersReducer2 from "./UsersFuncReducer.ts";
import postsSlice from "./postsSlice.ts";
=======
import profileReducer from "./ProfileReducer";
import authReducer from "./AuthReducer";
import usersReducer2 from "./UsersFuncReducer";
import postsSlice from "./postsSlice";
>>>>>>> 79392af7a2382da7abf7a4c2fdb0777072e0bfc8
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
