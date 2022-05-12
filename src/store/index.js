import { configureStore } from "@reduxjs/toolkit";
//just a name for reducer - you can put anything, export from slice by default
import feedReducer from "./Feed/slice";
import postReducer from "./PostPage/slice";

const store = configureStore({
  reducer: {
    feed: feedReducer,
    postPage: postReducer,
  },
});

export default store;
