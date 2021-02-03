import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import { increasePage } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const Page = ({ count, increasePage, page }) => {
  const classes = useStyles();

  return (
    <div className={classes.root + " page"}>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={(e, page) => {
          console.log(e.target.value, page);
          increasePage(page - 1);
        }}
        page={page + 1}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { page: state.filter.page };
};

export default connect(mapStateToProps, { increasePage })(Page);
