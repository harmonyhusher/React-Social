import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PostsType = {
  id: string,
  text: string,
  liked: boolean,
}

type PostsState = {
  list: PostsType[]
}

const initialState: PostsState = {
  list: []
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<string> ) { //указываем тип для экшена, в <> сам тип
      state.list.push({
        id: new Date().toISOString(),
        text: action.payload,
        liked: false,
      });
    },
    togglePostLiked(state, action: PayloadAction<string>) {
      const toggledPost = state.list.find(
        post => post.id === action.payload // .id
      );
      if (toggledPost) {
      toggledPost.liked = !toggledPost.liked
    }
  },
    removePost(state, action: PayloadAction<string>) {
      state.list = state.list.filter(post => post.id !== action.payload);
    },
  },
});

export const {addPost, togglePostLiked, removePost} = postsSlice.actions;

export default postsSlice.reducer; //reducer!!!!/ 1
