import React, { useEffect } from "react";
import "./Profile.css";
import NewPost from "../../component/Posts/NewPost/NewPost";
import Post from "../../component/Posts/post/Post";
import SideBar from "../../component/Sidebar/SideBar";
import "../../pages/profile/Profile.css";
import UserNameProfile from "../../component/userNameProfile/UserNameProfile";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPosts } from "../../redux/actions/getUserPosts";

function Profile({ showSettings, setShowSettings }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserPosts());
  }, [dispatch]);
  const postsData = useSelector((state) => state.getuserposts.userposts);

  return (
    <div className="profile-container">
      <div className="layout_app_profile">
        <div className="leftBox" style={{ width: "25%" }}>
          <SideBar
            showSettings={showSettings}
            setShowSettings={setShowSettings}
          />
        </div>
        <div style={{ width: "50%", padding: "20px" }}>
          <UserNameProfile postsData={postsData} />
          <div className="posts">
            <NewPost />
            {postsData &&
              postsData.toReversed().map((post, index) => {
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
        </div>
        <div className="rightBox" style={{ width: "25%" }}></div>
      </div>
    </div>
  );
}

export default Profile;
