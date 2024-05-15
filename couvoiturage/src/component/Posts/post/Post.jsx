import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Post.css";
import DeletePostConfirm from "../DeletePost/DeletePostConfirm";
import { useDispatch } from "react-redux";
import { applyPost, cancelPost } from "../../../redux/actions/getALLpostAction";
import FullSizePicture from "../FullSizePicture";

function Post({
  adressePart,
  adresseArrive,
  date,
  time,
  numplace,
  prix,
  phone,
  options,
  firstname,
  lastname,
  createdAt,
  profilePicture,
  creatorId,
  postId,
  appliedUsers,
  postPicture,
}) {
  const [showDltPost, setShowDltPost] = useState(false);
  const [showFullSize, setShowFullSize] = useState(false);
  const originalDate = new Date(createdAt);
  const year = originalDate.getFullYear();
  const month = String(originalDate.getMonth() + 1).padStart(2, "0");
  const day = String(originalDate.getDate()).padStart(2, "0");
  const hours = String(originalDate.getHours()).padStart(2, "0");
  const minutes = String(originalDate.getMinutes()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
  const pathname = useLocation().pathname;
  const user = JSON.parse(localStorage.getItem("user_data"));
  const userID = user.id;
  const dispatch = useDispatch();

  const handelApply = (postId, userID) => {
    if (numplace > 0) {
      dispatch(applyPost({ postId, userID }));
    }
  };

  const handelCancel = (postId, userID) => {
    dispatch(cancelPost({ postId, userID }));
  };

  return (
    <>
      <div className="post">
        <div className="post_user_details">
          <div className="user_image">
            <img
              src={creatorId !== userID ? profilePicture : user.profilePicture}
              alt="Profile"
            />
          </div>
          <div className="user_name">
            {creatorId !== userID ? (
              <h4>
                {firstname} {lastname}
              </h4>
            ) : (
              <h4>
                {user.firstname} {user.lastname}
              </h4>
            )}
            <span>{formattedDate}</span>
          </div>
          <div className="PostConfigBtns">
            <div
              className="postStatus"
              style={{ backgroundColor: numplace === 0 ? "red" : "blue" }}
            >
              {numplace === 0 ? "Closed" : "Open"}
            </div>

            {pathname !== "/profile" &&
              creatorId !== userID &&
              (appliedUsers.includes(userID) ? (
                <button
                  type="button"
                  className="CancelBtn"
                  onClick={() => handelCancel(postId, userID)}
                >
                  Cancel
                </button>
              ) : (
                <button
                  type="button"
                  className="ApplyBtn"
                  style={
                    numplace === 0
                      ? {
                          cursor: "auto",
                          backgroundColor: "grey",
                          color: "white",
                        }
                      : null
                  }
                  onClick={() => handelApply(postId, userID)}
                >
                  Apply
                </button>
              ))}
            {creatorId === userID && (
              <button
                type="button"
                className="DeleteBtn"
                onClick={() => setShowDltPost(!showDltPost)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="currentColor"
                    d="M21.499 19.994L32.755 8.727a1.064 1.064 0 0 0-.001-1.502c-.398-.396-1.099-.398-1.501.002L20 18.494L8.743 7.224c-.4-.395-1.101-.393-1.499.002a1.05 1.05 0 0 0-.309.751c0 .284.11.55.309.747L18.5 19.993L7.245 31.263a1.064 1.064 0 0 0 .003 1.503c.193.191.466.301.748.301h.006c.283-.001.556-.112.745-.305L20 21.495l11.257 11.27c.199.198.465.308.747.308a1.058 1.058 0 0 0 1.061-1.061c0-.283-.11-.55-.31-.747z"
                  ></path>
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="post_content_detailsWrapper"></div>
        <div className="post_content_details">
          <span
            style={{
              fontSize: "25px",
            }}
          >
            <b>{adressePart}</b>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              ></path>
            </svg>
            <b>{adresseArrive}</b>
          </span>
          <span className="startingDate">
            {/* <b>On road at</b> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
              className="descrIcon"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                <path
                  fill="currentColor"
                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1"
                ></path>
              </g>
            </svg>
            <b>{time}</b>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
              className="descrIcon"
            >
              <path
                fill="currentColor"
                d="M22 10H2v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3zM7 8a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1m10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"
                opacity={0.5}
              ></path>
              <path
                fill="currentColor"
                d="M19 4h-1v3a1 1 0 0 1-2 0V4H8v3a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v3h20V7a3 3 0 0 0-3-3"
              ></path>
            </svg>
            <b> {date}</b>
          </span>
          <span className="availablePlaces">
            {/* <b>Available place(s)</b> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24m-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2z"
              ></path>
            </svg>
            <b>{numplace} </b>
          </span>
          <span className="Price">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
              ></path>
              <path
                fill="currentColor"
                d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599zM19.425 10H9.397l7.469-2.546l1.522-.487zM15.55 5.79L7.84 8.418l6.106-4.878zM3.5 18.169v-4.34A3.008 3.008 0 0 0 5.33 12h13.34a3.009 3.009 0 0 0 1.83 1.83v4.34A3.009 3.009 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169"
              ></path>
            </svg>
            {prix} TND
          </span>
          <div className="detailsContainer">
            <div
              className="postPictureWrapper"
              onClick={() => setShowFullSize(!showFullSize)}
            >
              <img src={postPicture} alt="" className="postPicture" />
            </div>
            <div className="detailsContainerContents">
              <span>
                {/* <b>Phone n°</b> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                  className="descrIcon"
                >
                  <path
                    fill="currentColor"
                    d="M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6z"
                    opacity={0.3}
                  ></path>
                  <path
                    fill="currentColor"
                    d="M9.07 7.57A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02m7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5a13 13 0 0 0 .46 2.59z"
                  ></path>
                </svg>
                <b>{phone}</b>
              </span>
              <span className="postOptions">
                <button
                  type="button"
                  className={
                    options.includes("valeur-button1")
                      ? "btn-iconsPost toggleBtn"
                      : "btn-iconsPost"
                  }
                  data-value="valeur-button1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3rem"
                    height="1.3rem"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M220.59 36.94a11.83 11.83 0 0 0-13.08 2.61l-.19.2l-19.55 22.49a107.1 107.1 0 0 0-119.54 0L48.68 39.75l-.19-.2A12 12 0 0 0 28 48v88c0 50.72 44.86 92 100 92s100-41.27 100-92V48a11.82 11.82 0 0 0-7.41-11.06M220 136c0 45.09-39.12 82-88 83.91v-26.25l14.83-14.83a4 4 0 1 0-5.66-5.65L128 186.35l-13.17-13.17a4 4 0 1 0-5.66 5.65L124 193.66v26.26C75.12 218 36 181.1 36 136V48a3.93 3.93 0 0 1 2.47-3.7a4.4 4.4 0 0 1 1.6-.31a3.77 3.77 0 0 1 2.67 1.1l21.84 25.14a4 4 0 0 0 5.4.59A94 94 0 0 1 92 58.74V88a4 4 0 0 0 8 0V56a100 100 0 0 1 24-3.93V88a4 4 0 0 0 8 0V52.09A100 100 0 0 1 156 56v32a4 4 0 0 0 8 0V58.74a94 94 0 0 1 22 12.08a4 4 0 0 0 5.4-.59l21.84-25.11A4 4 0 0 1 220 48Zm-128 4a8 8 0 1 1-8-8a8 8 0 0 1 8 8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className={
                    options.includes("valeur-bouton2")
                      ? "btn-iconsPost toggleBtn"
                      : "btn-iconsPost"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3rem"
                    height="1.3rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1 0 1.85.83 1.85 1.85S17.5 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03m-2.82 2.47H14.5c-1 0-1.85-.98-1.85-2s.85-1.75 1.85-1.75v-1.5a3.35 3.35 0 0 0-3.35 3.35a3.35 3.35 0 0 0 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16"
                    ></path>
                  </svg>
                </button>

                <button
                  type="button"
                  className={
                    options.includes("valeur-bouton3")
                      ? "btn-iconsPost toggleBtn"
                      : "btn-iconsPost"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3rem"
                    height="1.3rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M9.5 18H8V9h1.5zm3.25 0h-1.5V9h1.5zM16 18h-1.5V9H16zm1-12h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2c0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6.5-2.5h3V6h-3zM17 19H7V8h10z"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className={
                    options.includes("valeur-bouton4")
                      ? "btn-iconsPost toggleBtn"
                      : "btn-iconsPost"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3rem"
                    height="1.3rem"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M108 136a16 16 0 1 1-16-16a16 16 0 0 1 16 16m56-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m68.24 26.18a20.4 20.4 0 0 1-8.41 1.85a19.6 19.6 0 0 1-3.83-.39V184a44.05 44.05 0 0 1-44 44H80a44.05 44.05 0 0 1-44-44v-36.37a19 19 0 0 1-3.85.39a20.3 20.3 0 0 1-8.39-1.84a19.71 19.71 0 0 1-11.4-21.9l16.42-88a20 20 0 0 1 24.51-15.69l.47.13l52 15.27h44.54l52-15.27l.47-.13a20 20 0 0 1 24.51 15.72l16.42 88a19.71 19.71 0 0 1-11.46 21.87m-60-91.63L217 112.42l-12.56-67.33ZM39 112.42l44.76-57.87l-32.2-9.46ZM196 184v-59.52L146.11 60h-36.22L60 124.48V184a20 20 0 0 0 20 20h36v-7l-12.48-12.49a12 12 0 0 1 17-17L128 175l7.51-7.52a12 12 0 0 1 17 17L140 197v7h36a20 20 0 0 0 20-20"
                    ></path>
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>

        {showDltPost && (
          <DeletePostConfirm
            showDltPost={showDltPost}
            setShowDltPost={setShowDltPost}
            postId={postId}
          />
        )}
        {showFullSize && (
          <FullSizePicture
            postPicture={postPicture}
            showFullSize={showFullSize}
            setShowFullSize={setShowFullSize}
          />
        )}
      </div>
    </>
  );
}

export default Post;
