import React, { useState } from "react";
import "./Settings.css";
import apiClient from "../../utility/apiClient";
import { toast } from "react-toastify";

function Settings({ showSettings, setShowSettings }) {
  const [formData, setFormData] = useState({
    profilePicture: null,
    firstname: "",
    lastname: "",
    email: "",
    bio: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
   const handleFileChange = (e) => {
     setFormData({ ...formData, profilePicture: e.target.files[0] });
   };
const handleSubmit = (e) => {
e.preventDefault()
const fromDatatosend = new FormData();
Object.entries(formData).forEach(([key,value])=>{
  fromDatatosend.append(key,value);
});
 toast.promise(
   apiClient.put("/users/Setting", fromDatatosend, {
     headers: { "Content-Type": "multipart/form-data" },
   })
 ,
   {
     pending: "'Updating settings...'",
     success: "File uploaded successfully",
     error: "Failed to upload file",
   });
}
  return (
    <div className="SettingsWrapper">
      <div className="Settings">
        <form onSubmit={handleSubmit}>
          <h1>Paramètres du compte</h1>
          <label htmlFor="profilePicture">
            Profile Picture:&nbsp;
            <input
              type="file"
              name="profilePicture"
              id="profilePicture"
              onChange={handleFileChange}
            />
          </label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            id=""
            placeholder="type your new first name..."
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            id=""
            placeholder="type your new last name..."
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            id=""
            placeholder="type your new email..."
            onChange={handleInputChange}
          />
          <textarea
            name="bio"
            id=""
            value={formData.bio}
            placeholder="change your Bio..."
            onChange={handleInputChange}
          ></textarea>
          <div className="SettingsBtns">
            <button type="submit">Sauvegarder</button>
            <button
              type="button"
              onClick={() => setShowSettings(!showSettings)}
            >
              Fermer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
