const initialState = {
  adressePart: "",
  adresseArrive: "",
  prix: "",
  numplace: 0,
  date: "",
  time: "",
  options: [],
  globalSearch: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GLOBAL_SEARCH_SETTER":
      return {
        adressePart: "",
        adresseArrive: "",
        prix: "",
        numplace: 0,
        date: "",
        time: "",
        options: [],
        globalSearch: action.payload,
      };
    case "ADDRESS_START_SETTER":
      return { ...state, adressePart: action.payload, globalSearch: "" };
    case "ADDRESS_END_SETTER":
      return { ...state, adresseArrive: action.payload, globalSearch: "" };
    case "DATE_SETTER":
      return { ...state, date: action.payload, globalSearch: "" };
    case "TIME_SETTER":
      return { ...state, time: action.payload, globalSearch: "" };
    case "NUMPLACE_SETTER":
      return { ...state, numplace: action.payload, globalSearch: "" };
    case "PRIX_SETTER":
      return { ...state, prix: action.payload, globalSearch: "" };
    case "OPTIONS_SETTER":
      return { ...state, options: action.payload, globalSearch: "" };
    case "ADDRESS_HOME_SEARCH_SETTER":
      return {
        adressePart: action.payload.adressePart,
        adresseArrive: action.payload.adresseArrive,
        prix: "",
        numplace: 0,
        date: "",
        time: "",
        options: [],
        globalSearch: "",
      };
    case "CLEAR_VALUES":
      return {
        adressePart: "",
        adresseArrive: "",
        prix: "",
        numplace: 0,
        date: "",
        time: "",
        options: [],
        globalSearch: "",
      };
    default:
      return state;
  }
};

export default filterReducer;
