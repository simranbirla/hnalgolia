import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import history from "../history";
import Filter from "./Filter";
import Header from "./Header";
import History from "./History";
import MainPage from "./MainPage";
import Search from "./Search";
import { connect } from "react-redux";
import Login from "./Login";

const App = ({ sign }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          {sign ? (
            <>
              <Route path="/" component={Header} />
              <Route path="/" component={Filter} />
              <Route path="/" exact component={MainPage} />
            </>
          ) : (
            <Route path="/" exact component={Login} />
          )}
          <Route path="/history" exact component={History} />
          <Route path="/query/:id" exact component={Search} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { sign: state.auth.sign_in };
};

export default connect(mapStateToProps)(App);
