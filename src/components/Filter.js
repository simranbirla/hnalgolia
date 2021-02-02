import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Filter = () => {
  const classes = useStyles();
  const [cat, setCat] = useState("All");
  const [type, setType] = useState("popularity");
  const [time, setTime] = useState("all");

  const handleChange = (event) => {
    setCat(event.target.value);
  };

  const handleFilter = (event) => {
    setType(event.target.value);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  return (
    <div className="filters">
      <p>Search</p>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cat}
          onChange={handleChange}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Stories">Stories</MenuItem>
          <MenuItem value="Comments">Comments</MenuItem>
        </Select>
      </FormControl>
      <p>By</p>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={type}
          onChange={handleFilter}
        >
          <MenuItem value="popularity">Popularity</MenuItem>
          <MenuItem value="date">Date</MenuItem>
        </Select>
      </FormControl>
      <p>From</p>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={time}
          onChange={handleTime}
        >
          <MenuItem value="all">All time</MenuItem>
          <MenuItem value="last24h">Last 24 hour</MenuItem>
          <MenuItem value="pastWeek">Past Week</MenuItem>
          <MenuItem value="pastMonth">Past Month</MenuItem>
          <MenuItem value="pastYear">Past Year</MenuItem>
          <MenuItem value="custom">Custom</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
