const FilterReducer = (
  state = { cat: "all", type: "popularity", time: "all", page: 0 },
  action
) => {
  switch (action.type) {
    case "CAT":
      return { ...state, cat: action.payload };
    case "TYPE":
      return { ...state, type: action.payload };
    case "TIME":
      return { ...state, time: action.payload };
    case "PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export default FilterReducer;
