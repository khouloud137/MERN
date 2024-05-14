import React from "react";
import "./Settings.css";

function Settings({ showSettings, setShowSettings }) {
  return (
    <div className="SettingsWrapper">
      <div className="Settings">
        <form>
          <h1>Paramètres du compte</h1>
          <label htmlFor="profilePicture">
            Profile Picture:&nbsp;
            <input type="file" name="profilePicture" id="profilePicture" />
          </label>
          <input
            type="text"
            name="firstname"
            id=""
            placeholder="type your new first name..."
          />
          <input
            type="text"
            name="lastname"
            id=""
            placeholder="type your new last name..."
          />
          <input
            type="text"
            name="email"
            id=""
            placeholder="type your new email..."
          />
          <textarea
            name="bio"
            id=""
            placeholder="change your Bio..."
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
