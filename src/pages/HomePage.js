import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import { fetchPosts } from "../store/Feed/actions";
import { selectAllPosts } from "../store/Feed/selectors";

// const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function Homepage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  //   const [data, setData] = useState({
  //     loading: true,
  //     posts: [],
  //   });

  //   async function fetchPosts() {
  //     setData({ ...data, loading: true }); //before fetching data, loading is set to true

  //     const response = await axios.get(`${API_URL}/posts`);
  //     const posts = response.data.rows;

  //     setData({
  //       loading: false, //once the data is fetched, loading is set to false
  //       posts: posts,
  //     });
  //   }

  //   Dispatch fetchPosts inside useEffect. This is the necessary step to fetch the data and put it in the Redux store.
  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);

  return (
    <div>
      <h2>Posts</h2>
      {!posts.length
        ? "Loading"
        : posts.map((post) => <p key={post.id}>{post.title}</p>)}
      <button onClick={() => dispatch(fetchPosts)}>Load more</button>
    </div>
  );
}
