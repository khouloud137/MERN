export const globalSearchSetter = (payload) => {
  return { type: "GLOBAL_SEARCH_SETTER", payload };
};
export const adressePartSetter = (payload) => {
  return { type: "ADDRESS_START_SETTER", payload };
};
export const adresseArriveSetter = (payload) => {
  return { type: "ADDRESS_END_SETTER", payload };
};
export const dateSetter = (payload) => {
  return { type: "DATE_SETTER", payload };
};
export const timeSetter = (payload) => {
  return { type: "TIME_SETTER", payload };
};
export const numplaceSetter = (payload) => {
  return { type: "NUMPLACE_SETTER", payload };
};
export const prixSetter = (payload) => {
  return { type: "PRIX_SETTER", payload };
};
export const optionsSetter = (payload) => {
  return { type: "OPTIONS_SETTER", payload };
};
export const adresseHomeSearchSetter = (payload) => {
  return { type: "ADDRESS_HOME_SEARCH_SETTER", payload };
};
export const clearValues = () => {
  return { type: "CLEAR_VALUES" };
};
