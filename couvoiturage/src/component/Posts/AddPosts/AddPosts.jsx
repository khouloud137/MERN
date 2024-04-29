import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../redux/actions/postAction";

function AddPosts() {
  const [post, setPost] = useState({
    adressePart: "",
    adresseArrive: "",
    date: "",
    numplace: "",
    prix: "",
    phone: "",
    description: "",
    creator: "",
  });
  const userID = useSelector((state) => state.users.user);
  
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // setPost({ ...post, creator: userID });
    dispatch(addPost(post));
    e.target.reset();
    setPost({
      adressePart: "",
      adresseArrive: "",
      date: "",
      numplace: "",
      prix: "",
      phone: "",
      description: "",
      creator: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adresse depart"
          onChange={(e) => setPost({ ...post, adressePart: e.target.value })}
        />
        <input
          type="text"
          placeholder=" Adtesse arrivé"
          onChange={(e) => setPost({ ...post, adresseArrive: e.target.value })}
        />
        <input
          type="time"
          placeholder="time"
          onChange={(e) => setPost({ ...post, date: e.target.value })}
        />
        <input
          type="number"
          placeholder="membres"
          onChange={(e) => setPost({ ...post, numplace: e.target.value })}
        />
        <input
          type="text"
          placeholder="prix"
          onChange={(e) => setPost({ ...post, prix: e.target.value })}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setPost({ ...post, description: e.target.value })}
        />
        <input
          type="tel"
          name="phone"
          pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}"
          placeholder="phone"
          required
          onChange={(e) => setPost({ ...post, phone: e.target.value })}
        />
        {/* <button onClick={togglePost}>fermer</button> */}
        <div className="new_post_buttons">
          <button type="Submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 28 28"
            >
              <path
                fill="currentColor"
                d="m18.27 3.21l7.5 7.25a.751.751 0 0 1 0 1.08l-7.5 7.25a.73.73 0 0 1-.52.21a.75.75 0 0 1-.75-.75v-3.74c-6.7.27-9.52 4.02-9.64 4.18a.77.77 0 0 1-.84.27a.75.75 0 0 1-.52-.71c0-8.02 6.59-10.48 11-10.73V3.75a.75.75 0 0 1 .46-.69a.74.74 0 0 1 .81.15M7.75 4A4.75 4.75 0 0 0 3 8.75v11.5A4.75 4.75 0 0 0 7.75 25h11.5A4.75 4.75 0 0 0 24 20.25v-.5a.75.75 0 0 0-1.5 0v.5a3.25 3.25 0 0 1-3.25 3.25H7.75a3.25 3.25 0 0 1-3.25-3.25V8.75A3.25 3.25 0 0 1 7.75 5.5h4.5a.75.75 0 0 0 0-1.5z"
              />
            </svg>
            post it !
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPosts;
