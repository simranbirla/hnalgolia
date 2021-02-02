import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { searchTerm } from "../redux/actions";

const Header = (props) => {
  const handleChange = (event) => {
    props.searchTerm(event.target.value);
  };

  return (
    <div className="header">
      <div className="header_left"></div>
      <div>
        <input type="text" placeholder="Search" onChange={handleChange} />
        <button>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { search: state.search };
};

export default connect(mapStateToProps, { searchTerm })(Header);
