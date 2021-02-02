export const addCat = (item) => {
  return { type: "CAT", payload: item };
};

export const addType = (item) => {
  return { type: "TYPE", payload: item };
};

export const addTime = (item) => {
  return { type: "TIME", payload: item };
};

export const searchTerm = (term) => {
  return { type: "SEARCH", payload: term };
};

export const increasePage = (page) => {
  return { type: "PAGE", payload: page };
};

export const signIn = (userId) => {
  return { type: "SIGN_IN", payload: userId };
};

export const signOut = () => {
  return { type: "SIGN_OUT" };
};
