import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { searchTerm } from "../redux/actions";
import history from "../history";

const Header = (props) => {
  const handleChange = (event) => {
    props.searchTerm(event.target.value);
  };

  const submitSearch = (event) => {
    history.push(`/query/${props.search}`);
  };

  return (
    <div className="header">
      <div className="header_left"></div>
      <div>
        <input type="text" placeholder="Search" onChange={handleChange} />
        <button onClick={submitSearch}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.search);
  return { search: state.search.term };
};

export default connect(mapStateToProps, { searchTerm })(Header);
