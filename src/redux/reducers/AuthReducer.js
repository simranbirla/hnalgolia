const AuthReducer = (state = { sign_in: false, user: null }, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, loading: false, sign_in: true, user: action.payload };
    case "SIGN_OUT":
      return { ...state, loading: false, sign_in: false, user: null };
    default:
      return state;
  }
};

export default AuthReducer;
