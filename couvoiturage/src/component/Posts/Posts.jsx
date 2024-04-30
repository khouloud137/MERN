import React from "react";
import "./Posts.css";
import Post from "./post/Post";
import NewPost from "./NewPost/NewPost";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/getALLpostAction";

function Posts() {
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.getposts);
  const errors = useSelector((state) => state.getposts.errors);
  const loading = useSelector((state) => state.getposts.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (errors) {
    return <p>Error: {errors}</p>;
  }
  return (
    <>
      <div className="posts">
        <NewPost />
        {postsData.posts &&
          postsData.posts.toReversed().map((post, index) => {
            return (
              <Post
                key={index}
                phone={post.phone}
                prix={post.prix}
                description={post.description}
                adressePart={post.adressePart}
                adresseArrive={post.adresseArrive}
                date={post.date}
                numplace={post.numplace}
                firstname={post.creator.firstname}
                lastname={post.creator.lastname}
                createdAt={post.createdAt}
              />
            );
          })}
      </div>
    </>
  );
}

export default Posts;
