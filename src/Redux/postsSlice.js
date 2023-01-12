import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost(state, action) {
      state.posts.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        liked: false,
      });
    },
    togglePostLiked(state, action) {
      const toggledPost = state.posts.find(
        post => post.id === action.payload.id
      );
      toggledPost.liked = !toggledPost.liked
    },
    removePost(state, action) {
      state.posts = state.posts.filter(post => post.id !== action.payload.id);
    },
  },
});

export const {addPost, togglePostLiked, removePost} = postsSlice.actions;

export default postsSlice.reducer; //reducer!!!!/ 1
