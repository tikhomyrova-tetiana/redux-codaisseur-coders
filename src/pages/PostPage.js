import React, { useEffect } from "react";
import { useParams } from "react-router";
import { fetchPost } from "../store/PostPage/thunk";
import { useDispatch, useSelector } from "react-redux";
import { selectPostsAndComments } from "../store/PostPage/selectors";
import { Link } from "react-router-dom";

export default function PostPage() {
  const dispatch = useDispatch();
  const postAndComment = useSelector(selectPostsAndComments);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(parseInt(id)));
  }, [dispatch, id]);

  if (!postAndComment)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  const { post, comments } = postAndComment;
  console.log("post and comment", postAndComment);

  return (
    <div>
      <h3>
        <Link to="/">Back</Link>
      </h3>
      <h2>{post.title}</h2>
      <p>
        {comments.rows.map((c) => (
          <li>{c.text}</li>
        ))}
      </p>
      PostPage {id}
    </div>
  );
}
