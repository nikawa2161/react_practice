import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "../DummyData";

// sliceはstate,reducer,actionCreatorを同時に作成できる。
// store内でsliceはいくつか保持可能

// 記事投稿のslice
export const postSlice = createSlice({
  name: "posts",
  // stateの初期化
  initialState: { value: PostsData },

  reducers: {
    // actionCreator[addPosts]
    addPost: (state, action) => {
      // Reducer箇所
      state.value.push(action.payload);
    },
    deletePost: (state, action) => {
      // Reducer箇所
      state.value = state.value.filter((post) => post.id !== action.payload.id)
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;