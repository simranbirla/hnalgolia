import React from "react";
import SearchIcon from "@material-ui/icons/Search";
const Header = () => {
  return (
    <div className="header">
      head
      <div className="header_left"></div>
      <div>
        <input type="text" placeholder="Search" />
        <button>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
