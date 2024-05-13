import React from "react";
import "./Posts.css";
import Post from "./post/Post";
import NewPost from "./NewPost/NewPost";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/getALLpostAction";

function Posts({ search }) {
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

  const filteredValue = postsData.posts
    .filter((post) => {
      return (
        post.adressePart
          .toLowerCase()
          .includes(search.globalSearch.toLowerCase()) ||
        post.adresseArrive
          .toLowerCase()
          .includes(search.globalSearch.toLowerCase()) ||
        post.prix.toLowerCase().includes(search.globalSearch.toLowerCase())
      );
    })
    .filter((post) => {
      if (search.date && search.time) {
        return (
          post.adressePart
            .toLowerCase()
            .includes(search.adressePart.toLowerCase()) &&
          post.adresseArrive
            .toLowerCase()
            .includes(search.adresseArrive.toLowerCase()) &&
          post.prix.toLowerCase().includes(search.prix.toLowerCase()) &&
          post.date === search.date &&
          post.time === search.time
        );
      }
      return (
        post.adressePart
          .toLowerCase()
          .includes(search.adressePart.toLowerCase()) &&
        post.adresseArrive
          .toLowerCase()
          .includes(search.adresseArrive.toLowerCase()) &&
        post.prix.toLowerCase().includes(search.prix.toLowerCase())
      );
    })
    .filter((post) => {
      if (search.options.length > 0) {
        return search.options.every((option) => post.options.includes(option));
      }
      return true;
    })
    .filter((post) => {
      if (search.numplace > 0) {
        return post.numplace === search.numplace;
      }
      return true;
    });

  return (
    <>
      <div className="posts">
        <NewPost />
        {filteredValue &&
          filteredValue.toReversed().map((post, index) => {
            return (
              <Post
                key={index}
                phone={post.phone}
                prix={post.prix}
                options={post.options}
                adressePart={post.adressePart}
                adresseArrive={post.adresseArrive}
                date={post.date}
                time={post.time}
                numplace={post.numplace}
                firstname={post.creator.firstname}
                lastname={post.creator.lastname}
                createdAt={post.createdAt}
                profilePicture={post.creator.profilePicture}
                creatorId={post.creator._id}
                postId={post._id}
              />
            );
          })}
      </div>
    </>
  );
}

export default Posts;
