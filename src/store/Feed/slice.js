import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
};

export const feed = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postsFetched: (state, action) => {
      // console.log the action to see what data is coming from the thunk
      console.log("postsFetched action", action);
      // We will get 5 posts at a time so it's important we keep the posts
      // currently in the state and add the new incoming ones at the end of the array
      state.posts = [...state.posts, ...action.payload]; // get our list of posts from the action payload
      state.loading = false;
    },
  },
});

export const { startLoading, postsFetched } = feed.actions;

export default feed.reducer;
