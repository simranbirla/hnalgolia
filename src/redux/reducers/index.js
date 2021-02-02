import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import SearchReducer from "./SearchReducer";
import FilterReducer from "./FilterReducer";

export default combineReducers({
  search: SearchReducer,
  filter: FilterReducer,
  auth: AuthReducer,
});
