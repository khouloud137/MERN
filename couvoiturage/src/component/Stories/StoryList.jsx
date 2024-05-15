import React from "react";
import "./StoryList.css";
import Story from "./Story/Story";
import { useSelector } from "react-redux";

function StoryList() {
  const postsData = useSelector((state) => state.getposts);
  const cropedData = postsData.posts.toReversed().slice(0, 3);
  // const stories = [
  //   {
  //     username: "ahmed",
  //     user_photo:
  //       "https://images.pexels.com/photos/20192525/pexels-photo-20192525/free-photo-of-mode-gens-femme-jeune-fille.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     story_photo:
  //       "https://i.pinimg.com/564x/b7/d1/8c/b7d18ca6bcbff7234e9c7eb3cd7f203a.jpg",
  //   },
  //   {
  //     username: "khouloud",
  //     user_photo:
  //       "https://images.pexels.com/photos/20192525/pexels-photo-20192525/free-photo-of-mode-gens-femme-jeune-fille.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     story_photo:
  //       "https://i.pinimg.com/564x/a6/fc/14/a6fc147827ec7607badcdda0b16ded56.jpg",
  //   },
  //   {
  //     username: "mariem",
  //     user_photo:
  //       "https://images.pexels.com/photos/20192525/pexels-photo-20192525/free-photo-of-mode-gens-femme-jeune-fille.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     story_photo:
  //       "https://i.pinimg.com/564x/93/c3/c1/93c3c128e5bc2eb69a051d5cbf3dbbac.jpg",
  //   },
  // ];

  return (
    <>
      <div className="stories">
        <Story type="new" />
        {cropedData.map((post, index) => (
          <Story type="old" data={post} key={index} />
        ))}
      </div>
    </>
  );
}

export default StoryList;
