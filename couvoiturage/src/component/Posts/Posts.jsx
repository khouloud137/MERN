import React from "react";
import "./Posts.css";
import Post from "./post/Post";
import NewPost from "./NewPost/NewPost";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/getALLpostAction";
function Posts() {
  // const [posts, setPosts] = useState([]); //État pour stocker les posts
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true); // État de chargement
  const [error, setError] = useState(null);
  const postsData = useSelector((state) => state.getposts);
  // console.log(postsData);
  const loading = useSelector((state) => state.getposts.loading);
  // console.log(loading) // État pour gérer les erreurs
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  if (loading) {
    return <p>Loading...</p>; // Affichage pendant le chargement
  }

  if (error) {
    return <p>Error: {error}</p>; // Affichage en cas d'erreur
  }

  return (
    <>
      <div className="posts">
        <NewPost />
        {postsData.posts &&
          postsData.posts.map((post, index) => {
            return (
              <Post
                key={index}
                phone={post.phone}
                prix={post.prix}
                description={post.description}
                adressePart={post.adressePart}
                adresseArrive={post.adresseArrive}
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
