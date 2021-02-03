import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { searchTerm } from "../redux/actions";
import { Link } from "react-router-dom";
import history from "../history";
import Google from "./GoogleAuth";
import "../Style/Header.css";

const Header = (props) => {
  const handleChange = (event) => {
    props.searchTerm(event.target.value);
  };

  const submitSearch = (event) => {
    history.push(`/query/${props.search}`);
  };

  return (
    <div className="header">
      <div className="header_left">
        <Link to="/"> {props.auth.user}</Link>
      </div>
      <div className="header_main">
        <input type="text" placeholder="Search" onChange={handleChange} />
        <button onClick={submitSearch}>
          <SearchIcon />
        </button>
      </div>

      <div className="header_right">
        <Google />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.auth);
  return { auth: state.auth };
};

export default connect(mapStateToProps, { searchTerm })(Header);
