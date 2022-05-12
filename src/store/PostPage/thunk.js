import axios from "axios";
import { startLoading, postFullyFetched } from "./slice";
import { API_URL } from "../../config";

// const API_URL = `https://codaisseur-coders-network.herokuapp.com`;
// not to declare it twice in different files - put it in config gile

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());

      const postResponse = await axios.get(`${API_URL}/posts/${id}`);
      console.log("postresponse", postResponse);
      const post = postResponse.data;
      console.log(post);

      const commentResponse = await axios.get(
        `${API_URL}/posts/${id}/comments`
      );
      console.log("commentresponse", commentResponse);
      const comments = commentResponse.data;
      console.log(comments);

      dispatch(
        postFullyFetched({
          post: post,
          comments: comments,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
}
