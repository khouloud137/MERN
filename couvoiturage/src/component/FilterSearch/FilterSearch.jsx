import React from "react";
import "./FilterSearch.css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import {
  adresseArriveSetter,
  adressePartSetter,
  dateSetter,
  numplaceSetter,
  optionsSetter,
  prixSetter,
  timeSetter,
} from "../../redux/actions/searchActions";

function FilterSearch() {
  let search = [];
  const dispatch = useDispatch();
  const handleicons = (e) => {
    if (e.target.classList.contains("toggleIcons")) {
      e.target.classList.remove("toggleIcons");
      const value = e.currentTarget.getAttribute("data-value");
      search = search.filter((item) => !item.includes(value));
    } else {
      e.target.classList.add("toggleIcons");
      const value = e.currentTarget.getAttribute("data-value");
      search = [...search, value];
    }
    dispatch(optionsSetter(search));
  };

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.3 }}
      className="FilterSearch"
    >
      <hr />
      <label>Advanced search: </label>
      <form>
        <input
          className="addPostInput"
          type="text"
          placeholder="Adresse depart"
          onChange={(e) => dispatch(adressePartSetter(e.target.value))}
        />
        <input
          className="addPostInput"
          type="text"
          placeholder=" Adtesse arrivé"
          onChange={(e) => dispatch(adresseArriveSetter(e.target.value))}
        />

        <input
          className="addPostInput"
          type="date"
          placeholder="date"
          onChange={(e) => dispatch(dateSetter(e.target.value))}
        />
        <input
          className="addPostInput"
          type="time"
          placeholder="time"
          onChange={(e) => dispatch(timeSetter(e.target.value))}
        />

        <input
          className="addPostInput"
          type="number"
          placeholder="membres"
          min={0}
          max={4}
          onChange={(e) => dispatch(numplaceSetter(Number(e.target.value)))}
        />
        <input
          className="addPostInput"
          type="text"
          placeholder="prix"
          onChange={(e) => dispatch(prixSetter(e.target.value))}
        />

        {/* <input
          className="addPostInput"
          type="text"
          placeholder="description"
          onChange={(e) => {
            setsearchvalue({
              ...search,
              description: e.target.value,
              globalSearch: "",
            });
          }}
        /> */}
        <div className="addPostInput svg-icones">
          <button
            type="button"
            className="btn-icons"
            data-value="valeur-button1"
            onClick={handleicons}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.9em"
              height="1.9em"
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
            className="btn-icons"
            data-value="valeur-bouton2"
            onClick={handleicons}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.9em"
              height="1.9em"
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
            className="btn-icons"
            data-value="valeur-bouton3"
            onClick={handleicons}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.9em"
              height="1.9em"
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
            className="btn-icons"
            data-value="valeur-bouton4"
            onClick={handleicons}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.9em"
              height="1.9em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M108 136a16 16 0 1 1-16-16a16 16 0 0 1 16 16m56-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m68.24 26.18a20.4 20.4 0 0 1-8.41 1.85a19.6 19.6 0 0 1-3.83-.39V184a44.05 44.05 0 0 1-44 44H80a44.05 44.05 0 0 1-44-44v-36.37a19 19 0 0 1-3.85.39a20.3 20.3 0 0 1-8.39-1.84a19.71 19.71 0 0 1-11.4-21.9l16.42-88a20 20 0 0 1 24.51-15.69l.47.13l52 15.27h44.54l52-15.27l.47-.13a20 20 0 0 1 24.51 15.72l16.42 88a19.71 19.71 0 0 1-11.46 21.87m-60-91.63L217 112.42l-12.56-67.33ZM39 112.42l44.76-57.87l-32.2-9.46ZM196 184v-59.52L146.11 60h-36.22L60 124.48V184a20 20 0 0 0 20 20h36v-7l-12.48-12.49a12 12 0 0 1 17-17L128 175l7.51-7.52a12 12 0 0 1 17 17L140 197v7h36a20 20 0 0 0 20-20"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default FilterSearch;
