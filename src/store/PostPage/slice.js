import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export const post = createSlice({
  name: "postPage",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    // dispatch in thunk.js
    postFullyFetched: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.loading = false;
    },
  },
});

export const { startLoading, postFullyFetched } = post.actions;

export default post.reducer;
