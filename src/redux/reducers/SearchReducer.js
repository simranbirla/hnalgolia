const INITIAL_STATE = {
  term: "",
};

const SearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, term: action.payload };
    case "CLEAR_PAGE":
      return { ...state, page: 1 };
    default:
      return state;
  }
};

export default SearchReducer;
