import { createSlice } from "@reduxjs/toolkit";

// 記事投稿のslice
export const memoSlice = createSlice({
  name: "memos",
  // stateの初期化
  initialState: { value: Array<string>() },

  reducers: {
    // actionCreator[addPosts]
    addPost: (state, action) => {
      state.value.push(action.payload);
    },
    deletePost: (state, action) => {
      // Reducer箇所
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addPost, deletePost } = memoSlice.actions;
export default memoSlice.reducer;
